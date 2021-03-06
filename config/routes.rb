Rails.application.routes.draw do
  root to: "staticpages#root"
  # get 'api/application/current_user', to: 'api/application#current_user'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :feedsources, only: [:index, :create]
    resources :user_feed_sources, only: [:create]
    get '/current_user', to: 'application#current_user'
    get '/feeds/:id', to: 'feedsources#feeds'
    get '/initialData', to: 'feedsources#initialData'
    patch '/saveForLater/:id', to: 'feedsources#saveForLater'
    get '/savedForLater', to: 'feedsources#savedForLater'
    patch '/setUnreadToFalse/:id', to: 'feedsources#setUnreadToFalse'
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  get '/auth/:provider/callback', to: 'api/authentications#create'
end
