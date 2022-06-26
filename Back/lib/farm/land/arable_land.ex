defmodule Farm.Land.Arable_land do
  use Ecto.Schema
  import Ecto.Changeset

  schema "arable_lands" do
    field :description, :string
    field :number, :integer
    field :size, :float
    field :owner_id, :id

    timestamps()
  end

  @doc false
  def changeset(arable_land, attrs) do
    arable_land
    |> cast(attrs, [:number, :size, :description])
    |> validate_required([:number, :size, :description])
  end
end
