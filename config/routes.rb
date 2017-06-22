Rails.application.routes.draw do
  namespace :api do
    resources :boards do
      resources :lists
    end

    resources :lists do
      resources :cards
    end

    resources :cards do
      resources :check_lists
    end
  end

  get '*other', to: 'static#index'
end
