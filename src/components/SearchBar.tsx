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
      // go to localhost/search?query=${query}
      setPreviousSearches([...previousSearches, query.toString()]);
      setInputValue("");
      
    }
  }

  return (
    <>
      <form onSubmit={search}>
        <input
          type="text"
          name="searchInput"
          placeholder="Search for photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
