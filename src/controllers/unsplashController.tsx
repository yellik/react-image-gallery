export async function getImage() {
  const result = await fetch(
    "https://api.unsplash.com/photos/?client_id=iAvGTXQhJQcXFYC87pPcGTaEozxRW66U4QPGbJLTV6g"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.urls;
      return data;
    });
}
