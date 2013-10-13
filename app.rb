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

require 'redcarpet'
# require 'active_support/inflector'

# method override when submitting forms. Allows HTTP PUT, PATCH, and DELETE
set :method_override, true

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

class Project
  include DataMapper::Resource

  property :id, Serial
  property :title, String, :required => true, :unique => true
  property :type, String, :required => true
  property :text, Text, :required => true
  property :project_links, Text
  property :images, Text, :required => true
  property :year, String
  property :published, Boolean, :required => true
  property :created_on, DateTime
  property :updated_on, DateTime
end

# Finish the tables
DataMapper.finalize
DataMapper.auto_upgrade!

# Warden configuration
# Cookie configuration
use Rack::Session::Cookie, secret: "pale pink unicorns will never be able to fly across the solar system in one fell dump", expire_after: 86400

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
  unless User.get(1)
    redirect '/admin/register'
  end
  redirect '/admin/login' unless env['warden'].user
  redirect '/' if env['warden'].user.admin == false
  @user = env['warden'].user
end

before '/blog/?' do @section = 'blog' end
before '/work/?' do @section = 'work' end

get '/' do
  @users = User.all
  @user_count = User.count
  @title = 'Mike Engel, designer'
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

# get '/admin' do
#   @title = 'Admin Dashboard'
#   haml :admin
# end

#
## ADMINISTRATION
#

get '/admin' do
  @published_post_count = Post.count(:published => true)
  @draft_post_count = Post.count(:published => false)
  @published_project_count = Project.count(:published => true)
  @draft_project_count = Project.count(:published => false)
  @user_count = User.count
  haml :admin, locals: { current_section: "" }
end

##
### WORK
##

get '/admin/work' do
  @projects = Project.paginate(:page => params[:page]).reverse!
  haml :admin_work, locals: { current_section: "work" }
end

get '/admin/work/new' do
  haml :new_project, locals: { current_section: "work" }
end

get '/admin/work/:id' do
  @project = Project.get!(params[:id])
  haml :edit_project, locals: { current_section: "work", current_project: @project.id }
end

post '/admin/work/create' do
  @new_project = Project.new(:title => params[:title], :text => params[:project_description], :type => params[:type], :project_links => params[:project_links], :images => params[:project_images], :created_at => Time.now, :updated_at => Time.now, :made_on => params[:publish_date], :published => params[:published])
  puts "project created..."
  if @new_project.valid?
    @new_project.save
    flash.next[:success] = "Project created successfully"
    redirect '/admin/work', locals: { current_section: "work" }
  else
    @new_project.errors.each { |e| puts e }
    flash.next[:error] = "Something went wrong. Try again."
    redirect '/admin/work/new', locals: { current_section: "work" }
  end
end

post '/admin/work/update/:id' do
  @project = Project.get(params[:id])
  @project.update(:title => params[:title], :text => params[:project_description], :type => params[:type], :project_links => params[:project_links], :images => params[:project_images], :updated_at => Time.now)
  flash.next[:success] = "Project updated successfully"
  redirect '/admin/work', locals: { current_section: "work" }
end

delete '/admin/work/delete/:id' do
  @project = Project.get(params[:id])
  @project.destroy
  flash.next[:success] = "Post successfuly deleted"
  redirect '/admin/work', locals: { current_section: "work" }
end

##
### BLOG
##

get '/admin/blog' do
  @posts = Post.paginate(:page => params[:page]).reverse!
  haml :admin_blog, locals: { current_section: "blog" }
end

get '/admin/blog/new' do
  haml :new_post, locals: { current_section: "blog" }
end

get '/admin/blog/:id' do
  @post = Post.get!(params[:id])
  puts @post
  haml :edit_post, locals: { current_section: "blog", current_post: params[:id] }
end

post '/admin/blog/create' do
  @new_post = Post.new(:title => params[:title], :text => params[:post_text], :published => params[:published], :created_at => Time.now, :updated_at => Time.now)
  if @new_post.valid?
    @new_post.save
    flash.next[:success] = "Post created successfully"
    redirect '/admin/blog', locals: { current_section: "blog" }
  else
    flash.next[:error] = "Something went wrong. Try again."
    redirect '/admin/blog/new', locals: { current_section: "blog" }
  end
end

post '/admin/blog/update/:id' do
  @post = Post.get(params[:id])
  @post.update(:title => params[:title], :text => params[:post_text], :published => params[:published], :updated_at => Time.now)
  flash.next[:success] = "Post successfully updated"
  redirect '/admin/blog', locals: { current_section: "blog" }
end

delete '/admin/blog/delete/:id' do
  @post = Post.get(params[:id])
  @post.destroy
  flash.next[:success] = "Post successfuly deleted"
  redirect '/admin/blog', locals: { current_section: "blog" }
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

get '/admin/register' do
  # let them register!
  if User.get(1)
    redirect '/admin/login'
  end

  @title = 'Create admin account'
  haml :register
end

post '/admin/register' do
  # create a new account
  @first_name = params[:first_name]
  @last_name = params[:last_name]
  @email = params[:email]
  @passwd = params[:password]

  if @passwd != params[:password_confirmation]
    flash.next[:error] = 'Your passwords didn\'t match, try again.'
    redirect '/admin/register'
  end

  @passwd = create_password(@passwd)

  @new_admin = User.new( :first_name => @first_name, :last_name => @last_name, :email => @email, :password_salt => @passwd['password_salt'], :password_hash => @passwd['password_hash'], :admin => true, :created_on => Time.now, :updated_on => Time.now )

  if @new_admin.save
    flash.next[:success] = 'You\'ve successfully created an admin account! Welcome.'
    env['warden'].authenticate
    redirect '/admin'
  else
    flash.next[:error] = []
    @new_admin.errors.each do |e|
      flash.next[:error] << e
    end
  end
end