import React from "react";
import CardP from "../../components/CardP/CardP";

export default function People({ data }) {
  return (
    <div className="card-container">
      {data.map((people, i) => {
        return (
          <div key={i} className="card">
            <CardP data={people} />
          </div>
        );
      })}
    </div>
  );
}
