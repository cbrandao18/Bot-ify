# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

robot = User.create(username: 'botuser', password: 'robots')

Artist.create(name: 'Post Malone', has_poster: true)
Artist.create(name: 'CRAY', has_poster: true)
Artist.create(name: 'ODESZA', has_poster: true)

Album.create(title: 'Album1', artist_id: 1)
Album.create(title: 'Album2', artist_id: 2)


Song.create(title: 'Album1Song1', length: 160, album_id: 1, explicit: true, album_order: 1)
Song.create(title: 'Album1Song2', length: 140, album_id: 1, explicit: true, album_order: 2)
Song.create(title: 'Album1Song3', length: 200, album_id: 1, explicit: true, album_order: 3)

Song.create(title: 'Album2Song1', length: 160, album_id: 2, explicit: false, album_order: 1)
Song.create(title: 'Album2Song2', length: 140, album_id: 2, explicit: true, album_order: 2)