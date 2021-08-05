import React from "react";
import ListItem from "./includes/ListItem";

export interface ListType{
  title: string;
  items: string[];
}

interface Props {
  list: ListType;
}

const List: React.FC<Props> = ({ list }) => {
  return (
    <div className="List">
      <p className="List__title">{list.title}</p>
      <ul className="List__items">
        {list.items.map((item, i) => <ListItem text={item} key={i} />)}
      </ul>
    </div>
  )
}

export default List