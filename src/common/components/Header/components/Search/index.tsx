const Search = () => {
  return (
    <div className="w-42 flex items-center">
      <img src="images/search/search.svg" />
      <input
        className="focus:outline-none p-2 font-light text-base font-ubuntu text-dark placeholder-shown:font-light text-base font-inter text-dark"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
