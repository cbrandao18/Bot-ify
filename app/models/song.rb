class Song < ApplicationRecord
    validates :title, :length, :album_id, :album_order, presence: true
    validates :explicit, inclusion: {in: [true, false]}

    belongs_to :album
end