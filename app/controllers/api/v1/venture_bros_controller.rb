class Api::V1::VentureBrosController < ApplicationController

  def index
    @venturebros = VentureBro.all
  end

  def create
    @venturebro = VentureBro.new(
                                  character: params[:character],
                                  vehicle: params[:vehicle],
                                  organization: params[:organization],
                                  quote: params[:quote]
                                  )
    @venturebro.save
    render :show
  end

  def show
    @venturebro = VentureBro.find(params[:id])
  end

  def update
    @venturebro = VentureBro.find(params[:id])
    @venturebro.assign_attributes(
                                  character: params[:character],
                                  vehicle: params[:vehicle],
                                  organization: params[:organization],
                                  quote: params[:quote]
                                  )
    @venturebro.save
    render :show
  end

  def destroy
    venturebro = VentureBro.find(params[:id])
    venturebro.destroy

    render json: {message: "destroyed"}, status: 200
  end
  

end
