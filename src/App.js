import React, { Component } from 'react';
import timeStamps from './stores/TimeStamps';
import TimeStampList from "./TimeStampList"

class App extends Component {
  render() {
    return (
      <div>
        <h1> Time Stamps </h1>
        <TimeStampList />
      </div>
    );
  }
}

export default App;
