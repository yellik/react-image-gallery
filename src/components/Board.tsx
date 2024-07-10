import { Image } from "./Image";
import { getImages } from "../controllers/unsplashController";
export function Board() {

  const photos = getImages();
  const photoUrl = photos[0].urls
  return (
    <>
      <h1>Board</h1>
      <Image src=(photos[1])>
    </>
  );
}
