import React, { useState } from "react";

export default function CardPl({ data: { 
  name,
  rotation_period, 
  orbital_period,
  diameter,
  climate,
  terrain,
  population
  } }) {
  const [isActive, setIsActive] = useState(false);


  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="description"
    >
      <h2>{name}</h2>
      {isActive && (
        <div className="description-container">
          <div>
            <strong>Rotation Period:</strong>
            <p>{rotation_period} days</p>
            <strong>Orbital Period:</strong>
            <p>{orbital_period} days</p>
            <strong>Diameter:</strong>
            <p>{diameter} km</p>
          </div>
          <div>
            <strong>Climate:</strong>
            <p>{climate}</p>
            <strong>Terrain:</strong>
            <p>{terrain}</p>
            <strong>Population</strong>
            <p>{population}</p>
          </div>
        </div>
      )}
    </div>
  );
}
