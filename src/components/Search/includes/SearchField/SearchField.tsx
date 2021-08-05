import React from "react";

const SearchField: React.FC = () => {
  return (
    <div className="SearchField">
      <input
        type="text"
        className="SearchField__input"
        placeholder="Укажите город"
      />
    </div>
  )
}

export default SearchField