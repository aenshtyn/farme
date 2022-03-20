defmodule FarmWeb.Api.CowView do
  use FarmWeb, :view
  alias FarmWeb.Api.CowView

  def render("index.json", %{cows: cows}) do
    %{data: render_many(cows, CowView, "cow.json")}
  end

  def render("show.json", %{cow: cow}) do
    %{data: render_one(cow, CowView, "cow.json")}
  end

  def render("cow.json", %{cow: cow}) do
    %{
      id: cow.id,
      name: cow.name,
      dob: cow.dob,
      breed: cow.breed,
      owner: cow.owner
    }
  end
end
