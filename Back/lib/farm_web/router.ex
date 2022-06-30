defmodule FarmWeb.Router do
  use FarmWeb, :router

  import FarmWeb.UserAuth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {FarmWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", FarmWeb do
    pipe_through :browser

    get "/", PageController, :index
    resources "/milks", MilkController
    resources "/cows", CowController
    resources "/machinerys", MachineryController
    resources "/medications", MedicationController
    resources "/photos", PhotoController
    resources "/calfs", CalfController
    resources "/donkeys", DonkeyController
    resources "/events", EventController
    resources "/workers", WorkerController
    resources "/duties", DutyController
    resources "/roles", RoleController
    resources "/patrons", PatronController
    resources "/arable", ArableController
    resources "/paddocks", PaddockController
    resources "/products", ProductController
    # Finance
    resources "/sales", SalesController
    resources "/procurements", ProcurementsController
    resources "/salarys", SalaryController
  end

  pipeline :api_authenticated do
    plug FarmWeb.AuthAccessPipeline
  end

  # Other scopes may use custom stacks.
  scope "/api", FarmWeb.Api, as: :api do
    pipe_through :api

    #Products
    resources "/calfs", CalfController
    resources "/milks", MilkController
    resources "/cows", CowController
    get "/cows/total", CowController, :total_number
    resources "/donkeys", DonkeyController
    resources "/events", EventController

    #Inventory
    resources "/machinerys", MachineryController
    resources "/medications", MedicationController

    # HR
    resources "/workers", WorkerController
    resources "/duties", DutyController
    resources "/roles", RoleController
    resources "/patrons", PatronController

    # Land
    resources "/arable", ArableController
    resources "/paddocks", PaddockController

    # Products
    resources "/products", ProductController

    # Finance
    resources "/sales", SalesController
    resources "/procurements", ProcurementsController
    resources "/salarys", SalaryController

    # Accounts
    post "/register", UserRegistrationController, :register
    post "/sign_in", SessionController, :create
    post "/sign_out", SessionController, :delete
  end

  ## AUthenticated api routes

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: FarmWeb.Telemetry
    end
  end

  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through :browser

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end

  ## Authentication routes

  scope "/", FarmWeb do
    pipe_through [:browser, :redirect_if_user_is_authenticated]

    get "/users/register", UserRegistrationController, :new
    post "/users/register", UserRegistrationController, :create
    get "/users/log_in", UserSessionController, :new
    post "/users/log_in", UserSessionController, :create
    get "/users/reset_password", UserResetPasswordController, :new
    post "/users/reset_password", UserResetPasswordController, :create
    get "/users/reset_password/:token", UserResetPasswordController, :edit
    put "/users/reset_password/:token", UserResetPasswordController, :update
  end

  scope "/", FarmWeb do
    pipe_through [:browser, :require_authenticated_user]

    get "/users/settings", UserSettingsController, :edit
    put "/users/settings", UserSettingsController, :update
    get "/users/settings/confirm_email/:token", UserSettingsController, :confirm_email

    resources "/cows", CowController
  end

  scope "/", FarmWeb do
    pipe_through [:browser]

    delete "/users/log_out", UserSessionController, :delete
    get "/users/confirm", UserConfirmationController, :new
    post "/users/confirm", UserConfirmationController, :create
    get "/users/confirm/:token", UserConfirmationController, :edit
    post "/users/confirm/:token", UserConfirmationController, :update
  end
end
