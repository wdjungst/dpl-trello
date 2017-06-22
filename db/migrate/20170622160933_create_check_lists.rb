class CreateCheckLists < ActiveRecord::Migration[5.1]
  def change
    create_table :check_lists do |t|
      t.string :name
      t.jsonb :items
      t.belongs_to :card, foreign_key: true

      t.timestamps
    end
  end
end
