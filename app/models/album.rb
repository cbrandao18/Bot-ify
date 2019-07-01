class Album < ApplicationRecord
    validates :title, :artist_id, presence: true

    belongs_to :artist

    has_many :songs

    has_one_attached :album_cover
end