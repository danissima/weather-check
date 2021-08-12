import React from "react";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <div className="PageNotFound">
      <h1 className="PageNotFound__text">Такой страницы не существует :(</h1>
      <p><Link to="/">Вернуться домой</Link></p>
    </div> 
  )
}

export default PageNotFound