import { Image } from "./Image";
import { SearchBar } from "./SearchBar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function Board({ searchTerm }) {
  const [page, setPage] = useState(1);

  const fetchPhotosSearch = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?query=${searchTerm || "default"}&page=${page}`,
      {
        headers: {
          Authorization:
            "Client-ID 5990YRBZafXkBNrlIIFlKu9p5SSMERGtV09WSZbS95Q",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.results;
  };

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["photo", page, searchTerm],
    queryFn: fetchPhotosSearch,
  });

  console.log(data);
  if (isLoading) {
    return <h1>is Loading...</h1>;
  }

  if (error) {
    return <h1>error!</h1>;
  }

  return (
    <>
      <h1>Board</h1>
      <SearchBar />
      {data.map((photo) => (
        <div key={photo.id}>
          <Image key={photo.id} photo={photo} />
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1 || isFetching}
          >
            Previous
          </button>
          <button
            onClick={() => setPage((old) => old + 1)}
            disabled={isFetching}
          >
            Next
          </button>
        </div>
      ))}
    </>
  );
}
