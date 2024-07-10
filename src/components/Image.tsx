
export function Image({photo}) {


  return (
    <>
    <a href={photo.urls.raw}>
      <img src={photo.urls.small}></img>
      </a>
    </>
  );
}
