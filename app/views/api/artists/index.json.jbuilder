@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :name, :has_poster
    end
end