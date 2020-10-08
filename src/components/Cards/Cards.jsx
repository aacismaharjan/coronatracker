import React from 'react'
import Card from './Card'
import Loading from '../Loading'
import { findByLabelText } from '@testing-library/react'

const Cards = (props) => {
  const { lastUpdate, recovered, confirmed, deaths } = props.data

  const cardItems = confirmed && [
    {
      name: 'Infected',
      text: 'Number of active cases of COVID-19',
      cases: recovered.value,
    },
    {
      name: 'Recovered',
      text: 'Number of active cases of COVID-19',
      cases: confirmed.value,
    },
    {
      name: 'Deaths',
      text: 'Number of active cases of COVID-19',
      cases: deaths.value,
    },
  ]

  return (
    <div className='container my-5'>
      <div className='row'>
        {cardItems ? (
          cardItems.map((card, index) => (
            <Card cards={{ ...card, lastUpdate }} key={index} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default Cards
