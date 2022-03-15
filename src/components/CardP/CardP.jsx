import React, { useState } from "react";

export default function CardP({ data }) {
  
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <h2>{data.name}</h2>
      {isActive && (
        <div className="description-container">
          <div>
            <strong>Height:</strong>
            <p>{data.height} cm</p>
            <strong>Mass:</strong>
            <p>{data.mass} kg</p>
            <strong>Gender</strong>
            <p>{data.gender}</p>
          </div>
          <div>
            <strong>Hair Color:</strong>
            <p>{data.hair_color}</p>
            <strong>Eyes Color:</strong>
            <p>{data.eye_color}</p>
            <strong>Birth Year:</strong>
            <p>{data.birth_year}</p>
          </div>
        </div>
      )}
    </div>
  );
}
