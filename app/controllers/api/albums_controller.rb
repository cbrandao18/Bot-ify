def index
    @albums = Albums.includes(:artist).all
    render :index
end

def show
    @album = Album.includes(:artist, :songs).find_by(id: params[:id])
    render :show
end