defmodule Farm.Repo.Migrations.CreatePatrons do
  use Ecto.Migration

  def change do
    create table(:patrons) do
      add :name, :string
      add :phone_number, :integer

      timestamps()
    end
  end
end
