import React, { Component } from 'react';
import './App.css';
import {Route,Switch}  from 'react-router-dom';
import Home from './Containers/Home';
import About from './Containers/About';
import NavBar from './Components/NavBar';
import FormElements from './Containers/FormElements';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/about" component={About}  />
          <Route path="/form" component={FormElements}  />
          <Route path="/"  component={Home}  />
        </Switch>
      </div>
    );
  }
}

export default App;
