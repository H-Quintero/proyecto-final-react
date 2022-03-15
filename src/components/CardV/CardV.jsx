import React, { useState } from "react";

export default function CardV({ data }) {

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
            
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}
