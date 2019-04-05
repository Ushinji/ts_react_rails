# frozen_string_literal: true

module ApplicationHelper
  def assets_path(path)
    return webpack_dev_server_path(path)
  end

  private
  def webpack_dev_server_path(path)
    "http://localhost:3010/#{path}"
  end
end
