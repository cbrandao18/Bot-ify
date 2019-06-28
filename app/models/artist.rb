class Artist < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :has_poster, inclusion: { in: [true, false]}

    has_many :albums

    has_many :songs,
    through :albums,
    source: :songs

end