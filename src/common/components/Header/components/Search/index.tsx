const Search = () => {
  return (
    <div className="w-34 flex items-center">
      <img src="/images/icons/search.svg" alt="user-logo" />
      <input
        className="focus:outline-transparent p-2 font-light text-base font-ubuntu text-dark placeholder-shown:font-light text-base font-inter text-dark border-none"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
