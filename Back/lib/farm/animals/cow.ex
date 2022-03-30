defmodule Farm.Animals.Cow do
  use Ecto.Schema
  import Ecto.Changeset

  schema "cows" do
    field :breed, :string
    field :dob, :date
    field :name, :string
    field :owner, :string

    timestamps()
  end

  @doc false
  def changeset(cow, attrs) do
    cow
    |> cast(attrs, [:name, :dob, :breed, :owner])
    |> validate_required([:name, :dob, :breed, :owner])
  end

  def age_in_months(dob) do
    (Date.utc_today.year - dob.year) * 12 + (Date.utc_today.month - dob.month)
  end

  def calculate_age() do
  
    
  end
end
