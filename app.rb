require 'bundler/setup'
require 'sinatra'
require 'sinatra/partial'

set :partial_template_engine, :erb

get '/' do
  output = ""
  output << partial(:top)
  output << partial(:index)
  output << partial(:bottom)
  output
end

get '/about' do
  output = ""
  output << partial(:top)
  output << partial(:about)
  output << partial(:bottom)
  output
end

get '/contact' do
  output = ""
  output << partial(:top)
  output << partial(:contact)
  output << partial(:bottom)
  output
end
