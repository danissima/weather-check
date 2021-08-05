import React from "react"
import SearchField from "./includes/SearchField/SearchField"

const Search: React.FC = () => {
  const submitHandler = (e: React.BaseSyntheticEvent<React.ReactNode>) => {
    e.preventDefault()
  }

  return (
    <div className="Search">
      <form onSubmit={submitHandler}>
        <div className="Search__content">
          <SearchField />
        </div>
      </form>
    </div>

  )
}

export default Search