class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all.includes(:artist)
        render :index
    end

    def show
        @album = Album.includes(:artist, :songs).find_by(id: params[:id])
        render :show
    end
end