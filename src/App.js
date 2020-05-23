import React, { Component } from 'react';
import logo from './img.jpeg';
import './App.css';
import Chart1 from './components/script1';
import Chart2 from './components/script2';
import Chart3 from './components/script3';
import Chart4 from './components/script4';

class App extends Component{
 
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <Chart1 />
          <Chart2 />
          <Chart3 />
          <Chart4 />
          </div>
        </header>
      </div>
    );
  }
}

export default App;