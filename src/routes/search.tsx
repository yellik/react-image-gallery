import { createFileRoute, useLocation } from "@tanstack/react-router";
import { Board } from "../components/Board";

const SearchRouteComponent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query") || "";
  return <Board searchTerm={searchTerm} />;
};
export const Route = createFileRoute("/search")({
  component: SearchRouteComponent,
});
