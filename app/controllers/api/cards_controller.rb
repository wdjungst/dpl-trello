class Api::CardsController < ApplicationController
  before_action :set_list, only: [:index, :create]
  before_action :set_card, only: [:show, :update, :destroy]
  
  def index
    render json: @list.cards.order(:priority)
  end

  def show
    render json: @card
  end

  def create
    card = @list.cards.new(card_params)
    if card.save
      render json: card
    else
      render_errors(card)
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render_errors(@card)
    end
  end

  def destroy
    @card.destroy
  end

  private
    def set_list
      @list = List.find(params[:list_id])
    end

    def set_card
      @card = Card.find(params[:id])
    end

    def card_params
      params.require(:card).permit(:name, :description, :priority, :due_date, members: [])
    end
end






