
export function Image({photo}) {


  return (
    <>
    <a href={photo.urls.raw}>
      <div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img src={photo.urls.small} alt="Paris"/>
    </div>
    <div className="flip-box-back">
      <h2>Paris</h2>
      <p>What an amazing city</p>
    </div>
  </div>
</div>
      </a>
    
    </>
  );
}
