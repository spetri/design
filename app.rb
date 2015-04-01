require "bundler/setup"
require 'sinatra'

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/about' do
  File.read(File.join('public', 'about.html'))
end
