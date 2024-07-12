import { Image } from "./Image";
import { SearchBar } from "./SearchBar";
import { useQuery } from "@tanstack/react-query";

export function Board() {
  const fetchPhotosSearch = async () => {
    const response = await fetch("https://api.unsplash.com/search/photos/", {
      headers: {
        Authorization: "Client-ID 5990YRBZafXkBNrlIIFlKu9p5SSMERGtV09WSZbS95Q",
        query: "balls",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["photo"],
    queryFn: () => fetchPhotosSearch,
    // fetch(
    //   "https://api.unsplash.com/photos/?client_id=iAvGTXQhJQcXFYC87pPcGTaEozxRW66U4QPGbJLTV6g"
    // ).then((res) => res.json()),
  });

  console.log(data);
  if (isLoading) {
    return (
      <>
        <h1>is Loading...</h1>
      </>
    );
  }

  if (error) {
    return <h1>error!</h1>;
  }

  return (
    <>
      <h1>Board</h1>
      <SearchBar />

      {data.map((photo) => (
        <div key={photo.id}>
          <Image key={photo.id} photo={photo} />
        </div>
      ))}
    </>
  );
}
