import React from "react";
import HistoryCity, { HistoryCityType } from "./includes/HistoryCity/HistoryCity";

const HistoryCities: React.FC = () => {
  const jsonSearchingHistory = localStorage.getItem('searchingHistory')
  const searchingHistory: HistoryCityType[] | null = jsonSearchingHistory ? JSON.parse(jsonSearchingHistory) : null;

  return (
    <div className="HistoryCities">
      {searchingHistory && searchingHistory.map((city, i) => <HistoryCity info={city} key={i} />)}
    </div>
  )
}

export default HistoryCities