json.playlist do
    json.extract! @playlist, :id, :title, :description, :owner_id
end

