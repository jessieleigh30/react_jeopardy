class Api::CardsController < ApplicationController
  before_action :set_card, only: [:show]
  
  def index
    render json: Card.all
  end

  def show
    render json: @card
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card
    else
      render json: category.errors, status: 422
    end
  end

  def update
  end

  def destory
  end

  private
  def set_card
    @card = Card.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:question, :answer, :points)
  end

end
