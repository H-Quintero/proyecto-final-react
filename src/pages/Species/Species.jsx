import React from 'react'
import CardSp from '../../components/CardSp/CardSp'

export default function Species({ data }) {
  return (
    <div className="card-container">
      {data.map((specie, i) => {
        return (
          <div key={i} className="card">
            <CardSp data={specie} />
          </div>

        )
      })}
      <h1>{data.name}</h1>
    </div>
  )
}
