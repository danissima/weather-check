import React from "react";

interface Props {
  onInput?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
}

const SearchField: React.FC<Props> = (props) => {
  return (
    <div className="SearchField">
      <input
        onInput={props.onInput}
        onFocus={props.onFocus}
        type="text"
        className="SearchField__input"
        placeholder="Укажите город"
      />
    </div>
  )
}

export default SearchField