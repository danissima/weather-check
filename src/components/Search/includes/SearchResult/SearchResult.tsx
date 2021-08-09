import React from "react";
import { Link, useLocation } from "react-router-dom";


interface Props {
  matchedValue: string;
  inputedValue: string;
}

const SearchResult: React.FC<Props> = (props) => {
  const unmatchedValue = props.matchedValue.replace(props.inputedValue, '')
  const currentLocation = useLocation()

  return (
    <div className="SearchResult">
      <Link
        to={{
          pathname: `/single-city/${props.matchedValue}`,
          state: { from: currentLocation.pathname }
        }}></Link>
      <span className="SearchResult_matched">{props.inputedValue}</span>
      <span className="SearchResult_unmatched">{unmatchedValue}</span>
    </div>
  )
}

export default SearchResult