import { Image } from "./Image";
import { getImages } from "../controllers/unsplashController";
import { useEffect, useState } from "react";

export function Board() {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
        const photos = await getImages();
        console.log(photos);
        setPhotos(photos);
    };

    fetchImages();
  }, []);


  return (
    <>
      <h1>Board</h1>
      {photos.map((photo) => (
        <Image key={photo.id} photo={photo} />
      ))}
    </>
  );
}