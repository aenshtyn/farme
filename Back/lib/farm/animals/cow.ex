defmodule Farm.Animals.Cow do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query

  schema "cows" do
    field :breed, :string
    field :dob, :date
    field :name, :string
    field :owner, :string
    has_many :milks, Farm.Products.Milk

    timestamps()
  end

  @doc false
  def changeset(cow, attrs) do
    cow
    |> cast(attrs, [:name, :dob, :breed, :owner])
    |> validate_required([:name, :dob, :breed, :owner])

    # |> age_in_months()
  end

  def age_in_months(dob) do
    (Date.utc_today().year - dob.year) * 12 + (Date.utc_today().month - dob.month)
  end

  def calculate_age() do
  end

  def cow_query(queryable \\ __MODULE__) do
    from( c in queryable, select: %{name: c.name, id: c.id})
  end
end
