json.playlist do
    json.extract! @playlist, :id, :title, :description, :owner_id
end

json.user do
    json.partial! "api/users/user", user: @playlist.owner
end