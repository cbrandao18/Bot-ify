json.extract! @song, :title, :length, :album_id, :explicit, :album_order, :id
json.album_cover @song.album.album_cover