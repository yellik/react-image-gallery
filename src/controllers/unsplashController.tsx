


export async function getImages() {
  const result = await fetch(
    "https://api.unsplash.com/photos/?client_id=iAvGTXQhJQcXFYC87pPcGTaEozxRW66U4QPGbJLTV6g"
  )
   const photos = await result.json();

  return photos
   
   
}
