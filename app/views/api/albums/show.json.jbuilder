json.album do
    json.extract! @album, :title, :artist_id, :id
end

json.songs do
    @album.songs.each do |song|
        json.set! song.id do
            json.extract! song, :title, :length, :album_id, :explicit, :album_order, :id
        end
    end
end

json.artist do
    json.extract! @album.artist, :name, :has_poster, :id
end