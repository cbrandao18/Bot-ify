@albums.each do |album|
    # json.albums do
        json.set! album.id do
            json.partial! "api/albums/album", album: album
            json.cover url_for(@album.album_cover)
        end
    # end

    # json.artist do
    #     json.extract! album.artist, :name, :has_poster, :id
    # end
end