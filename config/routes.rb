Rails.application.routes.draw do
  root to: "staticpages#root"
  resource :session
  resources :users, only: [:new, :create, :show]
end
