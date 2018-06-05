import React, { Component } from 'react';
import Mine from './Mine';
import Tile from './Tile';

let tileValue = Math.floor(Math.random() * 9) + 1;
console.log(tileValue);


class App extends Component {
  render() {
    return (
      <div className="App">
        {tileValue === 9 ? <Mine/> : <Tile tileValue={tileValue}/>}
      </div>
    );
  }
}

export default App;
