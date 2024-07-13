export function Image({ photo }) {
  return (
    <>
      <a href={photo.urls.raw}>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={photo.urls.small} alt="Paris" />
            </div>
            <div className="flip-box-back">
              <p>{photo.alt_description}</p>
              <h2>By {photo.user.name}</h2>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
