import React from 'react'
import CardV from '../../components/CardV/CardV';

export default function vehicles({ data }) {
  return (
    <div className="card-container">      
    {data.map((vehicle, i) => {
      return (
        <div key={i} className="card">
          <CardV data={vehicle} />      
        </div>
      );
    })}
  
  </div>
  )
}
