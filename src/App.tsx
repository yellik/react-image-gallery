import "./App.css";
import { Nav } from "./components/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, Route, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
