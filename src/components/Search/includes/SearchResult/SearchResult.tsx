import React from "react";
import { Link, useLocation } from "react-router-dom";


interface Props {
  disabledValue: string;
  enabledValue: string;
  disabled?: boolean;
}

const SearchResult: React.FC<Props> = (props) => {
  const unmatchedValue = props.disabledValue.replace(props.enabledValue, '')
  const currentLocation = useLocation()

  return (
    <div className="SearchResult">
      {
        !props.disabled &&
        <Link
          to={{
            pathname: `/single-city/${props.disabledValue}`,
            state: { from: currentLocation.pathname, search: true }
          }}
        ></Link>
      }

      <span className="SearchResult_matched">{props.enabledValue}</span>
      <span className="SearchResult_unmatched">{unmatchedValue}</span>
    </div>
  )
}

export default SearchResult