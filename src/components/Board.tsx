import { Image } from "./Image";
import { getImages } from "../controllers/unsplashController";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function Board() {


  const [photos, setPhotos] = useState<any[]>([]);

  /*
  useEffect(() => {
    const fetchImages = async () => {
      const photos = await getImages();
      console.log(photos);
      setPhotos(photos);
    };

    fetchImages();
  }, []);
*/


const QueryFetch = () => {
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


  return (
    <>
      <h1>Board</h1>
      <SearchBar />
      {photos.map((photo) => (
        <Image key={photo.id} photo={photo} />
      ))}
    </>
  );
}
