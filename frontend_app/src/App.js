import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Poses from './components/Poses.js'
import Home from './components/Home.js'
import Kickstarter from './components/Kickstarter.js'


class App extends Component {
  render() {
    return (
      <Router>
         <div>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Poses">Poses</Link></li>
            <li><Link to="/Kickstarter">Kickstarter Pathway</Link></li>

          </ul>
        <hr />


          <Switch>
            <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/poses">
                <Poses />
              </Route>
              <Route path="/kickstarter">
                <Kickstarter />
              </Route>
          </Switch>
          
        </div>
      </Router>
    )
  }
}



export default App;
