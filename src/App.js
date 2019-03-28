import React, { Component } from 'react';
import './App.css';
import Picture from './Picture'
const london = 'https://upload.wikimedia.org/wikipedia/commons/f/f6/City_of_London_skyline_from_London_City_Hall_-_Oct_2008.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Picture eStyle={{ width: '100vw', height: '100vh', }} sizeX={30} sizeY={30} start={[40, 40]} zoom={1} src={london} />
      </div>
    );
  }
}

export default App;
