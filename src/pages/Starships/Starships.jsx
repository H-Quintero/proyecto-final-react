import React from "react";
import CardSt from "../../components/CardSt/CardSt";

export default function Starships({ data }) {

  return (
    <div className="card-container">
      {data.map((starship, i) => {
        return (
          <div key={i} className="card">
            <CardSt  data={starship} />
          </div>
        )
      })}
    </div>
  );
}
