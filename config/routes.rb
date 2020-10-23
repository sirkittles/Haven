Rails.application.routes.draw do
  resources :hashtags
  resources :comments
  resources :posts
  resources :users

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/users/:id/posts' => 'posts#posts_of_user', :as => :user_posts
  resources :users do
    resources :posts, except: [:index]
  end

  # , only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
