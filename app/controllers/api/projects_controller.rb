class Api::ProjectsController < ApplicationController
  def show
    project = Project.find(params[:id])
    render json: {
      id: project.id,
      displayName: project.display_name,
    }
  end
end
