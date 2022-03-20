defmodule Farm.Products.Milk do
  use Ecto.Schema
  import Ecto.Changeset

  schema "milks" do
    field :day, :date
    field :milking_time, :string
    field :volume, :float
    # belongs_to :cow
    timestamps()
  end

  @doc false
  def changeset(milk, attrs) do
    milk
    |> cast(attrs, [:day, :volume, :milking_time])
    |> validate_required([:day, :volume, :milking_time])
  end
end
