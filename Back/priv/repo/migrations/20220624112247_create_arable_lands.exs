defmodule Farm.Repo.Migrations.CreateArableLands do
  use Ecto.Migration

  def change do
    create table(:arable_lands) do
      add :number, :integer
      add :size, :float
      add :description, :text
      # add :owner_id, references(:patrons, on_delete: :nothing)

      timestamps()
    end

    # create index(:arable_lands, [:owner_id])
    create index(:arable_lands, [:number])
  end
end
