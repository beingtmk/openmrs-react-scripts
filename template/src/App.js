import React, { Component } from 'react';
import logo from './openmrs.logo';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ExampleIndex from './components/demo';
import Accordion from './components/accordion/Accordion';

class App extends Component {


  render() {
    return (
      <div className="App">
   
        <Router>
          <Switch> 
            <Route
              component={ExampleIndex}
              exact path="/"
            />

            <Route
              component={Accordion}
              exact path="/accordion"
            />  
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
