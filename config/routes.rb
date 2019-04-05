# frozen_string_literal: true

Rails.application.routes.draw do
  match "*any", to: "root#index", via: :all
end
