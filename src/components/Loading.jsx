import React, { Component } from 'react';

class Loading extends Component {
  state = {}
  render() {
    return (
      <div className="d-flex justify-content-center align-center">
        <div className="spinner-border text-secondary m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div> <br />
      </div>
    );
  }
}

export default Loading;