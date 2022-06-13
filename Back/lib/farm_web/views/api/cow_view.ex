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
      age: cow.age,
      breed: cow.breed,
      owner: cow.owner,
      # weight: Enum.map(),
      milks: Enum.map(cow.milks, &render_milks(&1)),
      # calvings: Enum.map(),
      # AI: Enum.map(),
    }
  end

  def render_milks(milks) do
    %{day: milks.day, schedule: milks.milking_time, volume: milks.volume }
  end
end
