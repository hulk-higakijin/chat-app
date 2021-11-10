Rails.application.routes.draw do
  root to: 'pages#index'
  get '*path', to: 'pages#index'
  
  # Routerのmodeがhashの場合は不要です
  # get '/article/:id', to: 'pages#index'
end