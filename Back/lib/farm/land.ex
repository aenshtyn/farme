defmodule Farm.Land do
  @moduledoc """
  The Land context.
  """

  import Ecto.Query, warn: false
  alias Farm.Repo

  alias Farm.Land.Paddock

  @doc """
  Returns the list of paddocks.

  ## Examples

      iex> list_paddocks()
      [%Paddock{}, ...]

  """
  def list_paddocks do
    Repo.all(Paddock)
  end

  @doc """
  Gets a single paddock.

  Raises `Ecto.NoResultsError` if the Paddock does not exist.

  ## Examples

      iex> get_paddock!(123)
      %Paddock{}

      iex> get_paddock!(456)
      ** (Ecto.NoResultsError)

  """
  def get_paddock!(id), do: Repo.get!(Paddock, id)

  @doc """
  Creates a paddock.

  ## Examples

      iex> create_paddock(%{field: value})
      {:ok, %Paddock{}}

      iex> create_paddock(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_paddock(attrs \\ %{}) do
    %Paddock{}
    |> Paddock.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a paddock.

  ## Examples

      iex> update_paddock(paddock, %{field: new_value})
      {:ok, %Paddock{}}

      iex> update_paddock(paddock, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_paddock(%Paddock{} = paddock, attrs) do
    paddock
    |> Paddock.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a paddock.

  ## Examples

      iex> delete_paddock(paddock)
      {:ok, %Paddock{}}

      iex> delete_paddock(paddock)
      {:error, %Ecto.Changeset{}}

  """
  def delete_paddock(%Paddock{} = paddock) do
    Repo.delete(paddock)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking paddock changes.

  ## Examples

      iex> change_paddock(paddock)
      %Ecto.Changeset{data: %Paddock{}}

  """
  def change_paddock(%Paddock{} = paddock, attrs \\ %{}) do
    Paddock.changeset(paddock, attrs)
  end

  alias Farm.Land.Arable_land

  @doc """
  Returns the list of arable_lands.

  ## Examples

      iex> list_arable_lands()
      [%Arable_land{}, ...]

  """
  def list_arable_lands do
    Repo.all(Arable_land)
  end

  @doc """
  Gets a single arable_land.

  Raises `Ecto.NoResultsError` if the Arable land does not exist.

  ## Examples

      iex> get_arable_land!(123)
      %Arable_land{}

      iex> get_arable_land!(456)
      ** (Ecto.NoResultsError)

  """
  def get_arable_land!(id), do: Repo.get!(Arable_land, id)

  @doc """
  Creates a arable_land.

  ## Examples

      iex> create_arable_land(%{field: value})
      {:ok, %Arable_land{}}

      iex> create_arable_land(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_arable_land(attrs \\ %{}) do
    %Arable_land{}
    |> Arable_land.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a arable_land.

  ## Examples

      iex> update_arable_land(arable_land, %{field: new_value})
      {:ok, %Arable_land{}}

      iex> update_arable_land(arable_land, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_arable_land(%Arable_land{} = arable_land, attrs) do
    arable_land
    |> Arable_land.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a arable_land.

  ## Examples

      iex> delete_arable_land(arable_land)
      {:ok, %Arable_land{}}

      iex> delete_arable_land(arable_land)
      {:error, %Ecto.Changeset{}}

  """
  def delete_arable_land(%Arable_land{} = arable_land) do
    Repo.delete(arable_land)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking arable_land changes.

  ## Examples

      iex> change_arable_land(arable_land)
      %Ecto.Changeset{data: %Arable_land{}}

  """
  def change_arable_land(%Arable_land{} = arable_land, attrs \\ %{}) do
    Arable_land.changeset(arable_land, attrs)
  end
end
