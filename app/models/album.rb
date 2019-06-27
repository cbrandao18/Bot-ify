class Album < ApplicationRecord
    validates :title, :artist_id, presence: true

    belongs_to :artist
end