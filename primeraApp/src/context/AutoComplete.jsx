function AutoComplete({ searchResults, handleSetCity }) {
  return (
    <ul className="absolute top-[40px] w-full bg-[#1d1d1d] rounded-b-lg">
      {searchResults.map((result) => (
        <li className="flex rounded" key={result.id}>
          <button
            className="flex items-center w-screen px-[18px] py-2 hover:bg-[#262626] cursor-pointer"
            onClick={() => {
              handleSetCity(`${result.name}, ${result.country}`);
            }}
          >
            <img className="me-3" width={15} src="search.svg" alt="Search" />
            {result.name}, {result.country}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AutoComplete;
