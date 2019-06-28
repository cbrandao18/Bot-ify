@albums.each do |album|
    json.set! album.id do
        json.partial! "api/albums/album", album: album
    end

    json.artist do
        json.extract! album.artist, :name, :has_poster, :id
    end
end