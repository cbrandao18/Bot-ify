@songs.each do |song|
    json.set! song.id do
        json.extract! song, :title, :length, :album_id, :explicit, :album_order, :id
        json.track url_for(song.track)
    end
end