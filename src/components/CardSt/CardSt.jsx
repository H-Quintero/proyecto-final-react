import React, { useState } from 'react'

export default function CardSt({ data }) {

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
          <strong>Model:</strong>
          <p>{data.model}</p>
          <strong>Cost in Credits:</strong>
          <p>{data.cost_in_credits}</p>
          <strong>Made in:</strong>
          <p>{data.manufacturer}</p>
        </div>
        <div>
          <strong>Passengers:</strong>
          <p>{data.passengers}</p>
          <strong>Capacity:</strong>
          <p>{data.cargo_capacity} kg</p>
          <strong>Speed:</strong>
          <p>{data.max_atmosphering_speed} km/h</p>
        </div>
      </div>
    )}
    </div>
  )
}
