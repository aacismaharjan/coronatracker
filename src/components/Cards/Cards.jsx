import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {
  state = {
    cards: [
      {
        name: 'Infected',
        text: 'Number of active cases of COVID-19',
        cases: this.props.data.recovered.value,
      },
      {
        name: 'Recovered',
        text: 'Number of active cases of COVID-19',
        cases: this.props.data.confirmed.value,
      },
      {
        name: 'Deaths',
        text: 'Number of active cases of COVID-19',
        cases: this.props.data.deaths.value,
      },
    ],
  }

  render() {
    const { lastUpdate } = this.props.data

    return (
      <div className='container my-5'>
        <div className='row'>
          {this.state.cards.map((card, index) => (
            <Card cards={{ ...card, lastUpdate }} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default Cards
