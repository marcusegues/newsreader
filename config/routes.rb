Rails.application.routes.draw do
  root to: "staticpages#root"
  # get 'api/application/current_user', to: 'api/application#current_user'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :feedsources, only: [:index, :create]
    get '/current_user', to: 'application#current_user'
    get '/feeds/:id', to: 'feedsources#feeds'
    get '/todayFeeds', to: 'feedsources#todayFeeds'
    patch '/saveForLater/:id', to: 'feedsources#saveForLater'
    get '/savedForLater', to: 'feedsources#savedForLater'
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
end
