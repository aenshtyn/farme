defmodule FarmWeb.Api.MilkController do
  use FarmWeb, :controller

  alias Farm.Products
  alias Farm.Products.Milk

  action_fallback FarmWeb.FallbackController

  def index(conn, _params) do
    milks = Products.list_milks()
    render(conn, "index.json", milks: milks)
  end

  def create(conn, %{"milk" => milk_params}) do
    with {:ok, %Milk{} = milk} <- Products.create_milk(milk_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_milk_path(conn, :show, milk))
      |> render("show.json", milk: milk)
    end
  end

  def show(conn, %{"id" => id}) do
    milk = Products.get_milk!(id)
    render(conn, "show.json", milk: milk)
  end

  def update(conn, %{"id" => id, "milk" => milk_params}) do
    milk = Products.get_milk!(id)

    with {:ok, %Milk{} = milk} <- Products.update_milk(milk, milk_params) do
      render(conn, "show.json", milk: milk)
    end
  end

  def delete(conn, %{"id" => id}) do
    milk = Products.get_milk!(id)

    with {:ok, %Milk{}} <- Products.delete_milk(milk) do
      send_resp(conn, :no_content, "")
    end
  end
end
