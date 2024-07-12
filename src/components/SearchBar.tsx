import React, { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("previousSearches", JSON.stringify(previousSearches));
  }, [previousSearches]);

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("searchInput");

    if (query) {
      // Navigate to /search?query=${query}
      navigate({
        to: "/search",
        search: { query: query.toString() },
      });

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
