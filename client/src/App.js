import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link,Redirect } from 'react-router-dom'
// import styled from 'styled-components'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
// import AnotherPage from './components/AnotherPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Route>
          <Switch>
            <HomePage />
            <LoginForm />
          </Switch>
        </Route>
      </Router>
    )
  }
}

export default App
