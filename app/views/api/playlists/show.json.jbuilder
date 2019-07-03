json.playlist do
    json.extract! @playlist, :id, :title, :description, :owner_id
    json.song_ids do
        song_ids = []
        @playlist.songs.each do |song|
            song_ids << song.id
        end
        json.array! song_ids
    end
end

json.user do
    json.partial! "api/users/user", user: @playlist.owner
end

json.songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :title, :length, :album_id, :explicit, :album_order, :id
        end

    end
end

json.albums do
    @playlist.songs.each do |song|
        json.set! song.album.id do
            json.extract! song.album, :title, :artist_id
            json.cover url_for(song.album.album_cover)
        end
    end
end

json.artists do
    @playlist.songs.each do |song|
        json.set! song.album.artist.id do
            json.extract! song.album.artist, :name
        end
    end
end