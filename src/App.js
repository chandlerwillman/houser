import React, { Component } from 'react';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Wizard />
        <Header />
      </div>
    );
  }
}

export default App;
