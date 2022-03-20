defmodule FarmWeb.MilkController do
  use FarmWeb, :controller

  alias Farm.Products
  alias Farm.Products.Milk

  def index(conn, _params) do
    milks = Products.list_milks()
    render(conn, "index.html", milks: milks)
  end

  def new(conn, _params) do
    changeset = Products.change_milk(%Milk{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"milk" => milk_params}) do
    case Products.create_milk(milk_params) do
      {:ok, milk} ->
        conn
        |> put_flash(:info, "Milk created successfully.")
        |> redirect(to: Routes.milk_path(conn, :show, milk))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    milk = Products.get_milk!(id)
    render(conn, "show.html", milk: milk)
  end

  def edit(conn, %{"id" => id}) do
    milk = Products.get_milk!(id)
    changeset = Products.change_milk(milk)
    render(conn, "edit.html", milk: milk, changeset: changeset)
  end

  def update(conn, %{"id" => id, "milk" => milk_params}) do
    milk = Products.get_milk!(id)

    case Products.update_milk(milk, milk_params) do
      {:ok, milk} ->
        conn
        |> put_flash(:info, "Milk updated successfully.")
        |> redirect(to: Routes.milk_path(conn, :show, milk))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", milk: milk, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    milk = Products.get_milk!(id)
    {:ok, _milk} = Products.delete_milk(milk)

    conn
    |> put_flash(:info, "Milk deleted successfully.")
    |> redirect(to: Routes.milk_path(conn, :index))
  end
end
