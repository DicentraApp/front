import { FC } from 'react'

interface ISearch {
  searchIconPath: string
}

const Search: FC<ISearch> = ({ searchIconPath }) => {
  return (
    <div className="w-42 flex items-center">
      <img src={searchIconPath} alt="user-logo" />
      <input
        className="focus:ring-transparent p-2 font-light text-base font-ubuntu text-dark placeholder-shown:font-light text-base font-inter text-dark border-none"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
