def index
    @artists = Artist.all
    render :index
end

def show
    @artist = Artist.includes(:albums).find_by(id: params[:id])
end