class Api::CheckListsController < ApplicationController
  before_action :set_card, only: [:index, :create]
  before_action :set_check_list, only: [:update, :destroy]

  def index
    render json: @card.check_lists.order(:created_at)
  end

  def create
    cl = @card.check_lists.new(check_list_params)
    if cl.save
      render json: cl
    else
      render_errors(cl)
    end
  end

  def update
    if @check_list.update(check_list_params)
      render json: @check_list
    else
      render_errors(@check_list)
    end
  end

  def destroy
    @check_list.destroy
  end

  private
    def set_card
      @card = Card.find(params[:card_id])
    end

    def set_check_list
      @check_list = CheckList.find(params[:id])
    end

    def check_list_params
      params.require(:check_list).permit!
    end

end
