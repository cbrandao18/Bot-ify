class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.text :description
      
      t.timestamps
    end
  end
end
