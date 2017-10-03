Rails.application.routes.draw do
  get '/venture_bros' => 'venture_bros#index'

  namespace :api do
    namespace :v1 do
      get '/venture_bros' => 'venture_bros#index'
      post '/venture_bros' => 'venture_bros#create'
      get '/venture_bros/:id' => 'venture_bros#show'
      patch '/venture_bros/:id' => 'venture_bros#update'
      delete '/venture_bros/:id' => 'venture_bros#destroy'
    end

    namespace :v2 do
      get '/venture_bros' => 'venture_bros#index'
      post '/venture_bros' => 'venture_bros#create'
      get '/venture_bros/:id' => 'venture_bros#show'
      patch '/venture_bros/:id' => 'venture_bros#update'
      delete '/venture_bros/:id' => 'venture_bros#destroy'
    end
  end
end
