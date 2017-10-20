class VentureBro < ApplicationRecord
  validates :character, presence: true
  validates :vehicle, presence: true
  validates :organization, presence: true
  validates :quote, presence: true
  
end
