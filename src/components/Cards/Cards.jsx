import React from 'react'
import Card from './Card'

const Cards = (props) => {
  const { lastUpdate } = props.data
  const cardItems = [
    {
      name: 'Infected',
      text: 'Number of active cases of COVID-19',
      cases: props.data.recovered.value,
    },
    {
      name: 'Recovered',
      text: 'Number of active cases of COVID-19',
      cases: props.data.confirmed.value,
    },
    {
      name: 'Deaths',
      text: 'Number of active cases of COVID-19',
      cases: props.data.deaths.value,
    },
  ]
  return (
    <div className='container my-5'>
      <div className='row'>
        {cardItems.map((card, index) => (
          <Card cards={{ ...card, lastUpdate }} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Cards
