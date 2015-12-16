Rails.application.routes.draw do
  root to: "staticpages#root"
  # get 'api/application/current_user', to: 'api/application#current_user'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :feedsources, only: [:index]
    get '/current_user', to: 'application#current_user'
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
end
