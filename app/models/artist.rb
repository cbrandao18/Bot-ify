class Artist < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates  :has_poster, inclusion: { in: [true, false]}
end