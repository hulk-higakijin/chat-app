Rails.application.routes.draw do
  root to: 'pages#index'
  
  # Routerのmodeがhashの場合は不要です
  # get '/article/:id', to: 'pages#index'
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  resources :messages, only: ['index'] do
    member do
      resources :likes, only: ['create']
    end
  end
  resources :likes, only: ['destroy']

  # 上のルーティングに該当しない場合
  get '*path', to: 'pages#index'
end