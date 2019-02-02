import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navBar';


class App extends Component {
  render() {
    return (
    <React.Fragment>
      <NavBar/>
      <Counters />
    </React.Fragment>
    );
  }
}
export default App;
