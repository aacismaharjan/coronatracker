import React, { Component } from 'react';
import Countup from 'react-countup';

class Card extends Component {
  state = {}
  render() {
    return (
      <div className="col-md-4">
        <div className={`card mb-3 box-${this.props.cards.name.toLowerCase()}`}>
          <div className="card-body">
            <h4 className="card-title">
              <Countup start={0} end={this.props.numbers} duration={2.5} separator=","></Countup>
            </h4>
            <p className="card-text text-secondary m-0">{new Date(this.props.lastUpdate).toDateString()}</p>
            <p className="card-text">{this.props.cards.text}</p>
          </div>
          <div className="card-header bg-info text-white">{this.props.cards.name}</div>
        </div>
      </div>
    );
  }
}

export default Card;