class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :description
      t.string :due_date
      t.string :priority
      t.text :members
      t.belongs_to :list, foreign_key: true

      t.timestamps
    end
  end
end
