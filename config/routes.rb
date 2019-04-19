# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :projects, only: [:show, :index]
  end

  match "*any", to: "root#index", via: :all
end
