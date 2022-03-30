defmodule Farm.Repo.Migrations.CreateMilks do
  use Ecto.Migration

  def change do
    create table(:milks) do
      add :day, :date
      add :volume, :float
      add :milking_time, :string
      add :cow_id, references(:cows)

      timestamps()
    end
  end
end
