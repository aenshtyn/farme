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
    |> cast(attrs, [:day, :volume, :cow_id, :milking_time])
    |> validate_required([:day, :volume, :milking_time, :cow_id])
    |> unique_constraint(:day)
  end

  def milk_query() do
    # from m in milks,

  end
end
