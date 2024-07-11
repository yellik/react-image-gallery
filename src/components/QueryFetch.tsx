import React from "react";

import { useQuery, useQueryClient } from "@tanstack/react-query";




export const QueryFetch = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: [""],
    queryFn: () => fetch("https://api.unsplash.com/photos/?client_id=iAvGTXQhJQcXFYC87pPcGTaEozxRW66U4QPGbJLTV6g")
    .then((res) => res.json())
  });
  return (
    <div>
      <h1>hello</h1>
      {data.map((image) => (
        <div>image</div>
      ))}
    </div>
  );
};
