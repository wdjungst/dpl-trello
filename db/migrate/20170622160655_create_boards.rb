class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :name
      t.string :author
      t.string :color

      t.timestamps
    end
  end
end
