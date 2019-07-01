# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all

robot = User.create(username: 'botuser', password: 'robots')

the_xx = Artist.create(name: 'The XX', has_poster: true)
# odesza = Artist.create(name: 'ODESZA', has_poster: true)

the_xx_artist_img = open('https://botify-dev.s3.us-east-2.amazonaws.com/artist_hero_images/the_xx.jpeg')
the_xx.hero_image.attach(io: the_xx_artist_img, filename: 'the_xx.jpeg')

xx_album1 = Album.create(title: 'XX', artist_id: the_xx.id)

xx_album_cover = open('https://botify-dev.s3.us-east-2.amazonaws.com/albums/1.jpg')
xx_album1.album_cover.attach(io: xx_album_cover, filename: '1.jpg')

xx_album1_song1 = Song.create(title: 'Intro', length: 160, album_id: xx_album1.id, explicit: false, album_order: 1)
xx_album1_song1_mp3 = open('https://botify-dev.s3.us-east-2.amazonaws.com/albums/TheXX-XX/01_Intro.mp3')
xx_album1_song1.track.attach(io: xx_album1_song1_mp3, filename: '01_Intro.mp3')