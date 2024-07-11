import "./App.css";
import { Nav } from "./components/Nav";
import { Board } from "./components/Board";
import { Image } from "./components/Image";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route } from "@tanstack/react-router";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search?query=">
            <Board />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
      </QueryClientProvider>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
