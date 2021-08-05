import React from "react";
import HistoryCity from "./includes/HistoryCity/HistoryCity";

const HistoryCities: React.FC = () => {
  const cities = [
    { name: 'Москва', degrees: '-13°', time: '21:35' },
    { name: 'Москва', degrees: '-13°', time: '21:35' },
    { name: 'Москва', degrees: '-13°', time: '21:35' },
    { name: 'Москва', degrees: '-13°', time: '21:35' },
    { name: 'Москва', degrees: '-13°', time: '21:35' },
  ]

  return (
    <div className="HistoryCities">
      {cities.map((city, i) => <HistoryCity info={city} key={i} />)}
    </div>
  )
}

export default HistoryCities