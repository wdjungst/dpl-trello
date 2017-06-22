class Board < ApplicationRecord
  has_many :lists
  validates_presence_of :name
end
