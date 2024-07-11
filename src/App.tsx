import "./App.css";
import { Nav } from "./components/Nav";
import { Board } from "./components/Board";
import { Image } from "./components/Image";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Board />
      </QueryClientProvider>
    </>
  );
}

export default App;
