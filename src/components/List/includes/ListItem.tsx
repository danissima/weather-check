import React from "react";

interface Props {
  text: string;
}

const ListItem: React.FC<Props> = ({ text }) => {
  return (
    <li className="ListItem">{text}</li>
  )
}

export default ListItem