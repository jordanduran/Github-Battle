import React, { Component } from 'react';
import './App.css';
import Popular from './components/Popular';
import Battle from './components/Battle';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Battle />
      </div>
    );
  }
}

export default App;
