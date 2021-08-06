import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  info: {
    name: string;
    degrees: string;
    image: string;
  }
}

const DefaultCity: React.FC<Props> = ({ info }) => {
  const currentLocation = useLocation()

  return (
    <div className="DefaultCity">
      <p className="DefaultCity__name"><Link to={{ pathname: `/single-city/${info.name}`, state: currentLocation.pathname }}>{info.name}</Link></p>
      <p className="DefaultCity__degrees">{info.degrees}</p>
      <div className="DefaultCity__image">
        <img src={info.image} alt={info.degrees} />
      </div>
    </div>
  )
}

export default DefaultCity