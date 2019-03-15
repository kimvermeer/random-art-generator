import React, { Component } from 'react';
import './App.css';

import Canvas from './Canvas';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Random Art Generator</h1>
        </header>
        <main>
          <Canvas />
        </main>
      </>
    );
  }
}

export default App;
