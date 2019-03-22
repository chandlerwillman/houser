import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

import Routes from './routes';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {Routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
