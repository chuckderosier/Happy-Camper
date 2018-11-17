import React, { Component } from 'react'
import axios from 'axios'
// import styled from 'styled-components'

class LoginForm extends Component {

  state = {
    users: [],
    newUser: {
      username: '',
      campingStyle: '',
      userState: ''
    }
  }

  handleChange = (event) => {
    const updatedNewUser = { ...this.state.newUser }
    updatedNewUser[event.target.name] = event.target.value
    this.setState({ newUser: updatedNewUser })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users', this.state.newUser).then(res => {
      this.props.history.push(`/users/${res.data._id}`)
    })
  }

  render() {
    return (
      <div>
        <h3>Please enter you user profile information</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">User Name: </label>
            <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username" placeholder="ie, Grizzly Adams" />
          </div>
          <div>
            <label htmlFor="campingStyle">Camping Style: </label>
            <input onChange={this.handleChange} value={this.state.newUser.campingStyle} type="text" name="campingStyle" placeholder="Cabin, RV, tent, primitive" />
          </div>
          <div>
            <label htmlFor="userState">State You Live In: </label>
            <input onChange={this.handleChange} value={this.state.newUser.userState} type="text" name="userState" placeholder="ie, Georgia or Denial" />
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>
    )
  }
}

export default LoginForm