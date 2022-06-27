defmodule FarmWeb.PatronController do
  use FarmWeb, :controller

  alias Farm.Owner
  alias Farm.Owner.Patron

  def index(conn, _params) do
    patrons = Owner.list_patrons()
    render(conn, "index.html", patrons: patrons)
  end

  def new(conn, _params) do
    changeset = Owner.change_patron(%Patron{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"patron" => patron_params}) do
    case Owner.create_patron(patron_params) do
      {:ok, patron} ->
        conn
        |> put_flash(:info, "Patron created successfully.")
        |> redirect(to: Routes.patron_path(conn, :show, patron))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    patron = Owner.get_patron!(id)
    render(conn, "show.html", patron: patron)
  end

  def edit(conn, %{"id" => id}) do
    patron = Owner.get_patron!(id)
    changeset = Owner.change_patron(patron)
    render(conn, "edit.html", patron: patron, changeset: changeset)
  end

  def update(conn, %{"id" => id, "patron" => patron_params}) do
    patron = Owner.get_patron!(id)

    case Owner.update_patron(patron, patron_params) do
      {:ok, patron} ->
        conn
        |> put_flash(:info, "Patron updated successfully.")
        |> redirect(to: Routes.patron_path(conn, :show, patron))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", patron: patron, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    patron = Owner.get_patron!(id)
    {:ok, _patron} = Owner.delete_patron(patron)

    conn
    |> put_flash(:info, "Patron deleted successfully.")
    |> redirect(to: Routes.patron_path(conn, :index))
  end
end
