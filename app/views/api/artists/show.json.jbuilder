json.artist do
    json.extract! @artist, :name, :has_poster, :id
end

json.albums do
    @artist.albums.each do |album| 
        json.partial! "api/albums/album", album: album
    end
end