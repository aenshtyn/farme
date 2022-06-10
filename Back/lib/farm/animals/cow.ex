defmodule Farm.Animals.Cow do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query

  schema "cows" do
    field(:breed, :string)
    field(:dob, :date)
    # field :age, :integer
    field(:name, :string)
    field(:owner, :string)
    has_many(:milks, Farm.Products.Milk)

    timestamps()
  end

  @doc false
  def changeset(cow, attrs) do
    cow
    |> cast(attrs, [:name, :dob, :breed, :owner])
    |> cast_assoc(:milks, required: true)
    |> validate_required([:name, :dob, :breed, :owner])
    # |> put_age_in_months
  end

  # def put_age_in_months(changeset) do
  #   case changeset do
  #     %Ecto.changeset{valid?: true, changes: %{dob: dob}}
  #     ->
  #       put_change(changeset, :age, (Date.utc_today().year - dob.year) * 12 + (Date.utc_today().month - dob.month))
  #       changeset
  #   end
  # end

  def cow_query(queryable \\ __MODULE__) do
    from(c in queryable, select: %{name: c.name, id: c.id})
  end
end
