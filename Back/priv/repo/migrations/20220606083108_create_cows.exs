defmodule Farm.Repo.Migrations.CreateCows do
  use Ecto.Migration

  def change do
    create table(:cows) do
      add :name, :string
      add :dob, :date
      add :age, :integer
      add :breed, :string
      add :owner, :string

      timestamps()
    end
  end
end
