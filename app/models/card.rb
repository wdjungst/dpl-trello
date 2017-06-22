class Card < ApplicationRecord
  belongs_to :list
  has_many :check_lists
  validates_presence_of :name
end
