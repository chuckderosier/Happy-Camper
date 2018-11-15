import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
// import styled from 'styled-components'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
import UserPage from './components/UserPage'
import CampsitePage from './components/CampsitePage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/users/:userId' component={UserPage} />
          <Route exact path='/users/:userId/campsites/:campsiteId' component={CampsitePage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App
