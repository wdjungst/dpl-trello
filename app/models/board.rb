class Board < ApplicationRecord
  has_many :lists, dependent: :destroy
  validates_presence_of :name

  def self.lists_by_priority(id)
    select('boards.name as board_name, boards.author, 
           l.name as list_name, l.description, l.priority')
    .joins('LEFT JOIN lists l ON l.board_id = boards.id')
    .where('boards.id = ?', id)
    .order('l.priority')
  end
end
