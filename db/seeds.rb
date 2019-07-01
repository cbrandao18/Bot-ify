# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
ActiveRecord::Base.connection.execute("DELETE FROM active_storage_attachments")
ActiveRecord::Base.connection.execute("DELETE FROM active_storage_blobs")
User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all


robot = User.create(username: 'botuser', password: 'robots')

artist1 = Artist.create(name: 'The XX', has_poster: true)
artist1_hero = open('https://botify-dev.s3.us-east-2.amazonaws.com/ingest/The%20XX/hero.jpg')
artist1.hero_image.attach(io: artist1_hero, filename: 'hero.jpg')
artist1_album1 = Album.create(title: 'xx', artist_id: artist1.id)
artist1_album1_cover = open('https://botify-dev.s3.us-east-2.amazonaws.com/ingest/The%20XX/xx/cover.jpg')
artist1_album1.album_cover.attach(io: artist1_album1_cover, filename: 'cover.jpg')
artist1_album1_song1 = Song.create(title: 'Intro', length: 128, album_id: artist1_album1.id, explicit: false, album_order: 1)
artist1_album1_song1_mp3 = open('https://botify-dev.s3.us-east-2.amazonaws.com/ingest/The%20XX/xx/01%20Intro.mp3')
artist1_album1_song1.track.attach(io: artist1_album1_song1_mp3, filename: '01 Intro.mp3')
artist1_album1_song2 = Song.create(title: 'Vcr', length: 178, album_id: artist1_album1.id, explicit: false, album_order: 2)
artist1_album1_song2_mp3 = open('https://botify-dev.s3.us-east-2.amazonaws.com/ingest/The%20XX/xx/02%20Vcr.mp3')
artist1_album1_song2.track.attach(io: artist1_album1_song2_mp3, filename: '02 Vcr.mp3')
artist1_album1_song3 = Song.create(title: 'Crystalised', length: 203, album_id: artist1_album1.id, explicit: false, album_order: 3)
artist1_album1_song3_mp3 = open('https://botify-dev.s3.us-east-2.amazonaws.com/ingest/The%20XX/xx/03%20Crystalised.mp3')
artist1_album1_song3.track.attach(io: artist1_album1_song3_mp3, filename: '03 Crystalised.mp3')


