import React, { Component } from 'react';
import img from '../src/assets/images/logo.png';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className={classes.Header}>
          <img src={img} className={classes.Logo} alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
