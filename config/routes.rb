Rails.application.routes.draw do
  resources :hashtags
  resources :comments
  resources :posts
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/users/:id/posts' => 'users#posts', :as => :user_posts
  resources :users
  # , only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
