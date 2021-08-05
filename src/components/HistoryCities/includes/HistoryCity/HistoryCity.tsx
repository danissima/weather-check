import React from "react";

interface Props {
  info: {
    name: string;
    degrees: string;
    time: string;
  }
}

const HistoryCity: React.FC<Props> = ({ info }) => {
  return (
    <div className="HistoryCity">
      <div className="HistoryCity__left">
        <p className="HistoryCity__time">{info.time}</p>
        <p className="HistoryCity__name">{info.name}</p>
      </div>
      <div className="HistoryCity__right">
        <p className="HistoryCity__degrees">{info.degrees}</p>
      </div>
    </div>
  )
}

export default HistoryCity