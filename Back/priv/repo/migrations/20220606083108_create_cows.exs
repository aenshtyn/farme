defmodule Farm.Repo.Migrations.CreateCows do
  use Ecto.Migration

  def change do
    create table(:cows) do
      add :name, :string
      add :dob, :date
      add :age, :integer
      add :breed, :string
      add :patron_id, references(:patrons, on_delete: :nothing)

      timestamps()
    end

    create unique_index(:cows, [:patron_id])
  end
end
