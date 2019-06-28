# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all

robot = User.create(username: 'botuser', password: 'robots')

artist1 = Artist.create(name: 'Post Malone', has_poster: true)
artist2 = Artist.create(name: 'CRAY', has_poster: true)
artist3 = Artist.create(name: 'ODESZA', has_poster: true)

album1 = Album.create(title: 'Album1', artist_id: artist1.id)
album2 = Album.create(title: 'Album2', artist_id: artist1.id)
album3 = Album.create(title: 'Album3', artist_id: artist2.id)


Song.create(title: 'Album1Song1', length: 160, album_id: album1.id, explicit: true, album_order: 1)
Song.create(title: 'Album1Song2', length: 140, album_id: album1.id, explicit: true, album_order: 2)
Song.create(title: 'Album1Song3', length: 200, album_id: album1.id, explicit: true, album_order: 3)

Song.create(title: 'Album2Song1', length: 160, album_id: album2.id, explicit: false, album_order: 1)
Song.create(title: 'Album2Song2', length: 140, album_id: album2.id, explicit: true, album_order: 2)