class Card < ApplicationRecord
  belongs_to :list
  has_many :check_lists, dependent: :destroy
  validates_presence_of :name
  serialize :members, Array
end
