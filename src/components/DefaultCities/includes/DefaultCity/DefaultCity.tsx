import React from "react";

interface Props {
  info: {
    name: string;
    degrees: string;
    image: string;
  }
}

const DefaultCity: React.FC<Props> = ({ info }) => {
  return (
    <div className="DefaultCity">
      <p className="DefaultCity__name">{info.name}</p>
      <p className="DefaultCity__degrees">{info.degrees}</p>
      <div className="DefaultCity__image">
        <img src={info.image} alt={info.degrees} />
      </div>
    </div>
  )
}

export default DefaultCity