class CreateVentureBros < ActiveRecord::Migration[5.1]
  def change
    create_table :venture_bros do |t|
      t.string :character
      t.string :vehicle
      t.string :organization
      t.string :quote

      t.timestamps
    end
  end
end
