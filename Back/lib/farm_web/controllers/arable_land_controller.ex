defmodule FarmWeb.Arable_landController do
  use FarmWeb, :controller

  alias Farm.Land
  alias Farm.Land.Arable_land

  def index(conn, _params) do
    arable_lands = Land.list_arable_lands()
    render(conn, "index.html", arable_lands: arable_lands)
  end

  def new(conn, _params) do
    changeset = Land.change_arable_land(%Arable_land{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"arable_land" => arable_land_params}) do
    case Land.create_arable_land(arable_land_params) do
      {:ok, arable_land} ->
        conn
        |> put_flash(:info, "Arable land created successfully.")
        |> redirect(to: Routes.arable_land_path(conn, :show, arable_land))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    arable_land = Land.get_arable_land!(id)
    render(conn, "show.html", arable_land: arable_land)
  end

  def edit(conn, %{"id" => id}) do
    arable_land = Land.get_arable_land!(id)
    changeset = Land.change_arable_land(arable_land)
    render(conn, "edit.html", arable_land: arable_land, changeset: changeset)
  end

  def update(conn, %{"id" => id, "arable_land" => arable_land_params}) do
    arable_land = Land.get_arable_land!(id)

    case Land.update_arable_land(arable_land, arable_land_params) do
      {:ok, arable_land} ->
        conn
        |> put_flash(:info, "Arable land updated successfully.")
        |> redirect(to: Routes.arable_land_path(conn, :show, arable_land))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", arable_land: arable_land, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    arable_land = Land.get_arable_land!(id)
    {:ok, _arable_land} = Land.delete_arable_land(arable_land)

    conn
    |> put_flash(:info, "Arable land deleted successfully.")
    |> redirect(to: Routes.arable_land_path(conn, :index))
  end
end
