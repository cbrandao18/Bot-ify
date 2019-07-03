class Playlist < ApplicationRecord
    validates :title, :owner_id, presence: true

    belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'
    
    has_many :playlist_songs

    has_many :songs, 
    through: :playlist_songs
end