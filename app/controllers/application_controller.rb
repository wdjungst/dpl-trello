class ApplicationController < ActionController::API
  def render_errors(model)
    render json: { errors: model.errors.full_messages.join(',') }, status: 422
  end
end
