source 'https://rubygems.org'

gem 'sinatra'
gem 'sinatra-flash'
gem 'sinatra-contrib'
gem 'data_mapper'
gem 'bcrypt-ruby'
gem 'will_paginate'
gem 'haml'
gem 'unicorn'
gem 'warden'
gem 'redcarpet' # markdown for haml

group :production do
  gem 'pg'
  gem 'dm-postgres-adapter'
end

group :development, :test do
  gem 'dm-sqlite-adapter'
  gem 'rspec'
  gem 'capybara'
end