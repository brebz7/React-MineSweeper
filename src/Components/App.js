import React, { Component } from 'react';
import Grid from './Grid'

let tileValue = Math.floor(Math.random() * 9) + 1;
console.log(tileValue);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid /> 
      </div>
    );
  }
}

export default App;
