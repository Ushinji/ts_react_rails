class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :display_name, null: false

      t.timestamps null: false, limit: 6
    end
  end
end
