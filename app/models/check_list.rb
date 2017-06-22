class CheckList < ApplicationRecord
  belongs_to :card
  validates_presence_of :name
end
