defmodule Farm.Products.Milk do
  use Ecto.Schema
  import Ecto.Changeset
  alias Farm.Animals.Cow

  schema "milks" do
    field :day, :date
    field :milking_time, :string
    field :volume, :float
    belongs_to :cow, Cow

    timestamps()
  end

  @doc false
  def changeset(milk, attrs) do
    milk
    |> cast(attrs, [:day, :volume, :milking_time])
    # |> cast_assoc(:cow_id)
    |> validate_required([:day, :volume, :milking_time])
    # |> unique_constraint(:day, :milking_time)
  end
end
