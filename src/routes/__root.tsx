import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="[&.active]:font-bold">
            <button className="nav-button">Logo</button>
          </Link>
        </div>
        <div className="navbar-center">
          <Link to="/about" className="[&.active]:font-bold">
            <button className="nav-button">About</button>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="http://www.github.com/saltsthlm" className="[&.active]:font-bold">
            <button className="nav-button">Github</button>
          </Link>
        </div>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
});
