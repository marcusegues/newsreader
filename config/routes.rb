Rails.application.routes.draw do
  resource :session
  resources :users, only: [:new, :create, :show]
end
