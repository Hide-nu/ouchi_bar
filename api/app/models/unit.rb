class Unit < ApplicationRecord
  validates :name, uniqueness: true
  has_one :unit_conversion, dependent: :destroy
end
