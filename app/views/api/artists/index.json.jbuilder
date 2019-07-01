@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :name, :has_poster, :id
        json.hero url_for(artist.hero_image)
    end
end
