class Api::ProjectsController < ApplicationController
  def show
    project = Project.find(params[:id])
    render json: {
      id: project.id,
      displayName: project.display_name,
    }
  end

  def index
    projects = Project.all
    render json: projects.map{ |p| {
      id: p.id,
      displayName: p.display_name
    }}
  end
end
