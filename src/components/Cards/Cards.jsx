import React, { Component } from 'react';
import Card from "./Card";
import Loading from "../Loading"

class Cards extends Component {
  state = {
    cards: [
      {
        name: "Infected",
        text: "Number of active cases of COVID-19",
      },
      {
        name: "Recovered",
        text: "Number of active cases of COVID-19",
      },
      {
        name: "Deaths",
        text: "Number of active cases of COVID-19",
      }
    ]
  };

  render() {
    const { confirmed, recovered, deaths, lastUpdate } = this.props.data;
    if (!confirmed) return <Loading />;

    return (
      <div className="container my-5">
        <div className="row">
          <Card cards={this.state.cards[0]} numbers={confirmed.value} lastUpdate={lastUpdate} />
          <Card cards={this.state.cards[1]} numbers={recovered.value} lastUpdate={lastUpdate} />
          <Card cards={this.state.cards[2]} numbers={deaths.value} lastUpdate={lastUpdate} />
        </div>
      </div>
    );
  }
}

export default Cards;