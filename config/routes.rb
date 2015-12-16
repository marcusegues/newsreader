Rails.application.routes.draw do
  root to: "staticpages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
end
