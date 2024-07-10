import { getImage } from "../controllers/unsplashController";
export function Image() {
  const result = getImage();

  return (
    <>
      <h1>here is the image</h1>
      <h2></h2>
    </>
  );
}
