import React from 'react'
import CardSt from '../../components/CardSt/CardSt';

export default function vehicles({ data }) {
  return (
    <div className="card-container">      
    {data.map((vehicle, i) => {
      return (
        <div key={i} className="card">
          <CardSt data={vehicle} />      
        </div>
      );
    })}
  
  </div>
  )
}
