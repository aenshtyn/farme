defmodule Farm.Repo.Migrations.CreateMilks do
  use Ecto.Migration

  def change do
    create table(:milks) do
      add :day, :date
      add :volume, :float
      add :milking_time, :string
      add :cow_id, references(:cows, on_delete: :delete_all)

      timestamps()
    end

    create index(:milks, [:cow_id])
    create unique_index(:milks, [:day, :milking_time])
  end
end
