import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'

class LoginForm extends Component {

    state = {
        users: [],
        newUser: {
          username: '',
          password: ''
        }
      }
    
      handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewUser = {...this.state.newUser}
    
        updatedNewUser[event.target.name] = event.target.value
        this.setState({newUser: updatedNewUser})
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
    
        // Make post to our api to create new user
        axios.post('/api/users', this.state.newUser).then(res => {
          // when we get that data back, we need to navigate to the new users page
          console.log(res.data)
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
            <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username" placeholder="ie, Grizzly Adams"/>
          </div>
          <div>
            <label htmlFor="campingStyle">Camping Style: </label>
            <input onChange={this.handleChange} value={this.state.newUser.campingStyle} type="text" name="campingStyle" placeholder="Cabin, RV, tent, primitive"/>
          </div>
          <div>
            <label htmlFor="state">State You Live In: </label>
            <input onChange={this.handleChange} value={this.state.newUser.state} type="text" name="state" placeholder="ie, Georgia or Denial"/>
          </div>
          <button type="submit">Create User</button>
        </form>
            </div>
        )
    }
}

export default LoginForm