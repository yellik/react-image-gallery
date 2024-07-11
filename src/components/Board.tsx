import { Image } from "./Image";

import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useQuery } from "@tanstack/react-query";

export function Board() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["photo"],
    queryFn: () =>
      fetch(
        "https://api.unsplash.com/photos/?client_id=iAvGTXQhJQcXFYC87pPcGTaEozxRW66U4QPGbJLTV6g"
      ).then((res) => res.json()),
  });

  console.log(data);
  if (isLoading) {
    return (
      <>
        <h1>is Loading...</h1>
      </>
    );
  }

  if (error) {
    return <h1>error!</h1>;
  }

  return (
    <>
      <h1>Board</h1>
      <SearchBar />

      {data.map((photo) => (
        <Image key={photo.id} photo={photo} />
      ))}
    </>
  );
}
