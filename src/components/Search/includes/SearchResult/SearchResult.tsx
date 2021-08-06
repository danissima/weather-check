import React from "react";
import { Link } from "react-router-dom";


interface Props {
  matchedValue: string;
  inputedValue: string;
}

const SearchResult: React.FC<Props> = (props) => {
  const unmatchedValue = props.matchedValue.replace(props.inputedValue, '')

  return (
    <div className="SearchResult">
      <Link to={`/single-city/${props.matchedValue}`}></Link>
      <span className="SearchResult_matched">{props.inputedValue}</span>
      <span className="SearchResult_unmatched">{unmatchedValue}</span>
    </div>
  )
}

export default SearchResult