# Require the necessary gems
require 'sinatra'
require 'sinatra/flash'
require 'sinatra/reloader' if development? # will automatically reload the app during development, does make it slower

require 'data_mapper'
require 'bcrypt'
require 'warden'

require 'haml'

require 'will_paginate'
require 'will_paginate/data_mapper'
# require 'active_support/inflector'
# require './db/seeds'

# method override when submitting forms. Allows HTTP PUT, PATCH, and DELETE
set :method_override, true
set :sessions, true

# link data mapper to the database file. You can make an empty SQLite3 db with the following code in a terminal:
# sqlite3 main.db ""
# this next line assumes that the database is in a folder called db at the same level as this file, and that it's named main.db
DataMapper.setup(:default, "sqlite://#{File.expand_path(File.dirname(__FILE__))}/db/main.db")

# functions to be used site-wide regardless of whether it's in a view or controller
helpers do
  def create_password(password)
    password_salt = BCrypt::Engine.generate_salt
    password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    return info = { 'password_salt' => password_salt, 'password_hash' => password_hash }
  end
end

# Data mapper tables
class User
  include DataMapper::Resource

  property :id, Serial
  property :first_name, String, required: true, length: 2..50, messages: { presence: "Your first name is required.", length: "Your first name needs to be at least two characters long" }
  property :last_name, String, required: true, length: 2..50, messages: { presence: "Your last name is required.", length: "Your last name needs to be at least two characters long" }
  property :email, String, required: true, unique: true, format: :email_address, messages: { presence: "We need your email!", is_unique: "Looks like that email's already in use.", format: "Your email wasn't in a recognized format." }
  property :admin, Boolean, required: true, default: false
  property :password_salt, String, required: true
  property :password_hash, Text, required: true
  property :created_on, DateTime, required: true
  property :updated_on, DateTime, required: true

  def self.authenticate(email, password)
    user = first(email: email)
    if user
      if user.password_hash != BCrypt::Engine.hash_secret(password, user.password_salt)
        user = nil
      end
    end
    user
  end
end

class Post
  include DataMapper::Resource

  property :id, Serial
  property :title, String, required: true, unique: true, length: 2..50
  property :text, Text, required: true
  property :published, Boolean, required: true, default: false
  property :created_on, DateTime, required: true
  property :updated_on, DateTime, required: true, default: ""
end

# Finish the tables
DataMapper.finalize
DataMapper.auto_upgrade!

# Warden configuration
# Cookie configuration
use Rack::Session::Cookie, secret: "this is a super secret secret that no one will ever guess in their lifetime", expire_after: 86400

# Warden defaults
use Warden::Manager do |manager|
  manager.default_strategies :password
  manager.failure_app = FailureApp.new
end

# Create a cookie
Warden::Manager.serialize_into_session do |user|
  user.id
end

# Read a cookie
Warden::Manager.serialize_from_session do |id|
  User.get(id)
end

# Default authentication strategy
Warden::Strategies.add(:password) do
  def valid?
    params['email'] || params['password']
  end

  def authenticate!
    u = User.authenticate(params['email'], params['password'])
    u.nil? ? fail!('Could not login. Please try again') : success!(u)
  end
end

# Failure class
class FailureApp
  def call(env)
    uri = env['REQUEST_URI']
    puts "failure #{env['REQUEST_METHOD']} #{uri}"
  end
end

# Begin routing
# Check auth before admin requests
before '/admin/?' do
  redirect '/admin/login' unless env['warden'].user
  redirect '/' if env['warden'].user.admin == false
  @user = env['warden'].user
end

before '/blog/?' do @section = 'blog' end
before '/work/?' do @section = 'work' end

get '/' do
  @users = User.all
  @user_count = User.count
  @title = 'ZSSN'
  haml :home
end

get '/blog' do
  # render blog home page
  haml "%h1 the blog"
end

get '/work' do
  # render work home page
  haml "%h1 the work"
end

get '/about' do
  # render the about page
  @section = 'about'
  haml "%h1 about me"
end

get '/admin' do
  @title = 'Admin Dashboard'
  haml :admin
end

get '/admin/login' do
  # redirect them to the login page if they're already logged in
  if @user
    redirect '/admin'
  else
    @title = 'Admin login'
    haml :admin_login
  end
end

post '/admin/login' do
  if env['warden'].authenticate
    if env['warden'].user.admin
      flash.next[:success] = "Welcome back #{env['warden'].user.first_name}"
      redirect '/admin'
    else
      flash.next[:warn] = "Unfortunately, you aren't an admin. You've been logged in as a regular user."
      redirect '/'
    end
  else
    flash.next[:error] = 'Incorrect username or password. Try again'
    redirect '/admin/login'
  end
end

get '/logout' do
  env['warden'].logout
  flash.next[:success] = "You've been successfully logged out"
  redirect '/'
end