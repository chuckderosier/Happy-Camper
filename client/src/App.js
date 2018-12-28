import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import UserForm from './components/UserForm'
import UserPage from './components/UserPage'
import CampsitePage from './components/CampsitePage'
import CampsiteForm from './components/CampsiteForm'
import UpdateUserForm from './components/UpdateUserForm'
import UpdateCampsiteForm from './components/UpdateCampsiteForm'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/users/:userId/campsites/:campsiteId/updateCampsite' component={UpdateCampsiteForm} />
          <Route exact path='/users/:userId/newCampsite' component={CampsiteForm} />
          <Route exact path='/users/:userId/campsites/:campsiteId' component={CampsitePage} />
          <Route exact path='/users/:userId/updateUser' component={UpdateUserForm} />
          <Route exact path='/users/:userId' component={UserPage} />
          <Route exact path='/newUser' component={UserForm} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App
