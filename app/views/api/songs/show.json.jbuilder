json.song do
    json.extract! song, :title, :length, :album_id, :explicit, :album_order
end