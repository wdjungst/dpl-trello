class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :name
      t.string :description
      t.string :priority
      t.belongs_to :board, foreign_key: true

      t.timestamps
    end
  end
end
