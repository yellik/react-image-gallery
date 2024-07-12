import { Image } from "./Image";
import { SearchBar } from "./SearchBar";
import { useQuery } from "@tanstack/react-query";

export function Board() {
  //need to add prop for searchterm, also if no searchterm, send default get.
  const fetchPhotosSearch = async (searchTerm:string) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?query=${searchTerm}`,
      {
        headers: {
          Authorization: "Client-ID 5990YRBZafXkBNrlIIFlKu9p5SSMERGtV09WSZbS95Q",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.results;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["photo"],
    queryFn: fetchPhotosSearch,
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
