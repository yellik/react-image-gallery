import { useState, useEffect } from "react";
export function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem("previousSearches", JSON.stringify(previousSearches));
  }, [previousSearches]);

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("searchInput");
    console.log(query);

    if (query) {
      setPreviousSearches([...previousSearches, query.toString()]);
      setInputValue(""); // Clear the input after search
    }
  }

  return (
    <>
      <form action={search}>
        <input type="text" name="searchInput" placeholder="Search for photos" />
        <button type="submit"></button>
      </form>
    </>
  );
}
