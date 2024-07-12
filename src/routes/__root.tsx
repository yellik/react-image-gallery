import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export const Route = createRootRoute({
  component: () =>     <>
  <div className="p-2 flex gap-2">
    <Link to="/" className="[&.active]:font-bold">
      Logo
    </Link>{' '}
    <Link to="/about" className="[&.active]:font-bold">
      About
    </Link>
    <Link to="http://www.github.com/saltsthlm" className="[&.active]:font-bold">
      Github
    </Link>
  </div>
  <hr />
  <Outlet />
  <TanStackRouterDevtools />
</>
});
