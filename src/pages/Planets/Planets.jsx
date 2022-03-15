import React from 'react';
import CardPl from '../../components/CardPl/CardPl';

export default function Planets({ data }) {
  return (
    <div className="card-container">      
      {data.map((planet, i) => {
        return (
          <div key={i} className="card">
            
            <CardPl data={planet}/>
          </div>
        );
      })}
    
    </div>
  )
}
