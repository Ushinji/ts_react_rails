class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :display_name, null: false

      t.timestamps null: false, limit: 6
    end
  end
end
