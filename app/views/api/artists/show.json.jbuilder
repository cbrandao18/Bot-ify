json.artist do
    json.extract! @artist, :name, :has_poster, :id
    json.hero url_for(@artist.hero_image)
end

json.albums do
    @artist.albums.each do |album|
        json.set! album.id do
            json.partial! "api/albums/album", album: album
            json.cover url_for(album.album_cover)
        end
    end
end