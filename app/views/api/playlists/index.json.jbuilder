@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :title, :owner_id, :description, :id
    end
end