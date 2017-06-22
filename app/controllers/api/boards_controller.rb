class Api::BoardsController < ApplicationController
  before_action :set_board, only: [:show, :update, :destroy]

  def index
    render json: Board.all.order(:created_at)
  end

  def show
    render json: @board
  end

  def create
    board = Board.new(board_params)
    if board.save
      render json: board
    else
      render_errors(board)
    end
  end

  def update
    if @board.update(board_params)
      render json: @board
    else
      render_errors(@board)
    end
  end

  def destroy
    @board.destroy
  end

  private
    def set_board
      @board = Board.find(params[:id])
    end

    def board_params
      params.require(:board).permit(:name, :author, :color)
    end

end





