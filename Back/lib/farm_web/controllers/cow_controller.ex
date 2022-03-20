defmodule FarmWeb.CowController do
  use FarmWeb, :controller

  alias Farm.Animals
  alias Farm.Animals.Cow

  def index(conn, _params) do
    cows = Animals.list_cows()
    render(conn, "index.html", cows: cows)
  end

  def new(conn, _params) do
    changeset = Animals.change_cow(%Cow{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"cow" => cow_params}) do
    case Animals.create_cow(cow_params) do
      {:ok, cow} ->
        conn
        |> put_flash(:info, "Cow created successfully.")
        |> redirect(to: Routes.cow_path(conn, :show, cow))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    cow = Animals.get_cow!(id)
    render(conn, "show.html", cow: cow)
  end

  def edit(conn, %{"id" => id}) do
    cow = Animals.get_cow!(id)
    changeset = Animals.change_cow(cow)
    render(conn, "edit.html", cow: cow, changeset: changeset)
  end

  def update(conn, %{"id" => id, "cow" => cow_params}) do
    cow = Animals.get_cow!(id)

    case Animals.update_cow(cow, cow_params) do
      {:ok, cow} ->
        conn
        |> put_flash(:info, "Cow updated successfully.")
        |> redirect(to: Routes.cow_path(conn, :show, cow))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", cow: cow, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    cow = Animals.get_cow!(id)
    {:ok, _cow} = Animals.delete_cow(cow)

    conn
    |> put_flash(:info, "Cow deleted successfully.")
    |> redirect(to: Routes.cow_path(conn, :index))
  end
end
