Rails.application.routes.draw do
  get '*other', to: 'static#index'
end
