class Board < ApplicationRecord
  has_many :lists, dependent: :destroy
  validates_presence_of :name
end
