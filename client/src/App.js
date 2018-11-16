import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import styled from 'styled-components'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
import UserPage from './components/UserPage'
import CampsitePage from './components/CampsitePage'
import CampsiteForm from './components/CampsiteForm'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/users/:userId/updateUser' component={UpdateForm} />
          <Route exact path='/users/:userId/newCamp' component={CampsiteForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/users/:userId/campsites/:campsiteId' component={CampsitePage} />
          <Route exact path='/users/:userId' component={UserPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App
