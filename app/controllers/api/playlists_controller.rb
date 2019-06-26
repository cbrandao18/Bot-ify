class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.all
        render :index
    end

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.owner_id = current_user.id
        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def show
        @playlist = Playlist.includes(:owner).find_by(id: params[:id])
        render :show
    end

    def destroy 
        @playlist = Playlist.find_by(id: params[:id])
        @playlist.destroy
        @playlists = Playlist.all
        render :index
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title, :owner_id, :description)
    end
end