class AddStateColumnIntoUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :state, :string
  end
end
