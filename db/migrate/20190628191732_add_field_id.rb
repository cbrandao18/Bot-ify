class AddFieldId < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :file_id, :integer
    add_column :albums, :file_id, :integer
    add_column :songs, :file_id, :integer
  end
end
