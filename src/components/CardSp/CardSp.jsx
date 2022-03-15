import React, { useState } from "react";

export default function CardSp({ data }) {
  const [isAvtive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      
    >
      <h2>{data.name}</h2>
      {isAvtive && (
        <div className="description-container">
          <div className="item">
            <strong>Classification:</strong>
            <p>{data.classification}</p>
            <strong>Designation:</strong>
            <p>{data.designation}</p>
            <strong>Average Height:</strong>
            <p>{data.average_height} cm</p>
            <strong>Average Lifespan:</strong>
            <p>{data.average_lifespan} years</p>
          </div>
          <div>
            <strong>Skin Colors:</strong>
            <p>{data.skin_colors}</p>
            <strong>Hair Color:</strong>
            <p>{data.hair_colors}</p>
            <strong>Eyes Color:</strong>
            <p>{data.eye_colors}</p>
            <strong>Language</strong>
            <p>{data.language}</p>
          </div>
        </div>
      )}
    </div>
  );
}
