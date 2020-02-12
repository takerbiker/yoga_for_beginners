class CreatePoses < ActiveRecord::Migration[6.0]
  def change
    create_table :poses do |t|
      t.string :name
      t.string :image
      t.string :category

      t.timestamps
    end
  end
end
