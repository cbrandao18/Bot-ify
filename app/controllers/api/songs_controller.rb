class Api::SongsController < ApplicationController
    def index
        @songs = Song.includes(:album).all
        render :index
    end

    def show
        @song = Song.includes(:album).find_by(id: params[:id])
        render :show
    end
end