import AutoComplete from "./AutoComplete";
import { useState, useEffect, useRef } from "react";
import { getAutoComplete } from "../components/Api";

function SearchBar({
  margin = "",
  display = "flex",
  sm = "sm:flex",
  handleSetCity,
}) {
  const searchBarRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const [searchcity, setSearchCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleSetSearchCity(city) {
    handleSetCity(city);
    setSearchCity("");
  }

  useEffect(() => {
    setSearchResults([]);
    if (searchcity.length > 2) {
      const delayDebounceFn = setTimeout(() => {
        getAutoComplete(searchcity).then((res) => {
          setSearchResults(res);
        });
      }, 100);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchcity]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchBarRef}
      className={`w-full relative ${margin} ${display} flex-col ${sm}`}
    >
      <form
        onSubmit={(e) => e.preventDefault(handleSetSearchCity(searchcity))}
        className={`bg-[#1d1d1d] flex px-3 items-center rounded`}
        onClick={() => setFocus(true)}
      >
        <img className="pe-2" src="search.svg" alt="Search" />
        <input
          className="bg-transparent w-full h-full py-3 focus:outline-none placeholder:text-[#7C7C7C] "
          type="text"
          value={searchcity}
          placeholder="Search country or city"
          onFocus={() => setFocus(true)}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </form>
      {focus && (
        <AutoComplete
          searchResults={searchResults}
          handleSetCity={handleSetSearchCity}
        />
      )}
    </div>
  );
}

export default SearchBar;
