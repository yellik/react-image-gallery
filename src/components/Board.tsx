import { Image } from "./Image";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";



const likePhoto = async (photoId) => {
  const response = await fetch(`https://api.unsplash.com/photos/${photoId}/like`, {
    method: 'POST',
    headers: {
      "Authorization": "Client-ID 5990YRBZafXkBNrlIIFlKu9p5SSMERGtV09WSZbS95Q",
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
};



export function Board() {
  const queryClient = new QueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["photo"],
    queryFn: () =>
      fetch(
        "https://api.unsplash.com/photos/?client_id=iAvGTXQhJQcXFYC87pPcGTaEozxRW66U4QPGbJLTV6g"
      ).then((res) => res.json()),
  });

  
  const mutation = useMutation({
    mutationFn: likePhoto ,
    onSuccess: () => {queryClient.invalidateQueries({queryKey: ['photo']})}
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
        <div key={photo.id}>
        <Image key={photo.id} photo={photo} />
        <button onClick={() => mutation.mutate(photo.id)}>Like Me</button>
        </div>     
      ))}
    </>
  );
}
