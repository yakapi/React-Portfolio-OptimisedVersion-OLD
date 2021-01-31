import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Testy from './component/Test/test'
import Page from './component/Page/page'

import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
        <Router>
        <div className="AppZone">
          <Switch>
            <Route path="/Project">
              <Page name="project"/>
            </Route>
            <Route path="/About">
              <Page name="about"/>
            </Route>
            <Route path="/Contact">
              <Page name="contact"/>
            </Route>
            <Route path="/">
              <Page name="home"/>
            </Route>
          </Switch>
        </div>
        </Router>
    )
  }
}

export default App
