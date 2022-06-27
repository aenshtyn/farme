defmodule Farm.Owner.Patron do
  use Ecto.Schema
  import Ecto.Changeset

  schema "patrons" do
    field :name, :string
    field :phone_number, :integer

    timestamps()
  end

  @doc false
  def changeset(patron, attrs) do
    patron
    |> cast(attrs, [:name, :phone_number])
    |> validate_required([:name, :phone_number])
  end
end
