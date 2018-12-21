class Api::CategoriesController < ApplicationController
  
  before_action :set_category, only: [:show]

  def index
    render json: Category.all
  end

  def show
    render json: @category
  end

  def create
    category = Category.new(category_params)
    if category.save
      render json: category
    else
      render json: category.errors, status: 422
    end
  end

  def update
  end

  def destory
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name)
  end
end
