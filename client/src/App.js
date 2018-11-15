import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
// import styled from 'styled-components'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
import UserPage from './components/UserPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/api/LoginForm' component={LoginForm} />
          <Route exact path='api/UserPage' component={UserPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App
