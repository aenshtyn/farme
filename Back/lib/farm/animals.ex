defmodule Farm.Animals do
  @moduledoc """
  The Animals context.
  """

  import Ecto.Query, warn: false
  alias Farm.Repo

  alias Farm.Animals.Cow

  @doc """
  Returns the list of cows.

  ## Examples

      iex> list_cows()
      [%Cow{}, ...]

  """
  def list_cows do
    Repo.all(Cow)
  end

  @doc """
  Gets a single cow.

  Raises `Ecto.NoResultsError` if the Cow does not exist.

  ## Examples

      iex> get_cow!(123)
      %Cow{}

      iex> get_cow!(456)
      ** (Ecto.NoResultsError)

  """
  def get_cow!(id), do: Repo.get!(Cow, id)

  @doc """
  Creates a cow.

  ## Examples

      iex> create_cow(%{field: value})
      {:ok, %Cow{}}

      iex> create_cow(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_cow(attrs \\ %{}) do
    %Cow{}
    |> Cow.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a cow.

  ## Examples

      iex> update_cow(cow, %{field: new_value})
      {:ok, %Cow{}}

      iex> update_cow(cow, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_cow(%Cow{} = cow, attrs) do
    cow
    |> Cow.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a cow.

  ## Examples

      iex> delete_cow(cow)
      {:ok, %Cow{}}

      iex> delete_cow(cow)
      {:error, %Ecto.Changeset{}}

  """
  def delete_cow(%Cow{} = cow) do
    Repo.delete(cow)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking cow changes.

  ## Examples

      iex> change_cow(cow)
      %Ecto.Changeset{data: %Cow{}}

  """
  def change_cow(%Cow{} = cow, attrs \\ %{}) do
    Cow.changeset(cow, attrs)
  end
end