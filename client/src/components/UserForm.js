import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
    background-image: url("/images/happyCamperBG3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    form {
        margin: .3em auto;
        padding: 10px;
        width: 40vw;
        height: 30vh;
        background-color: rgba(255,255,255,.5);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    div {
        margin: 0 auto;
    }
    button {
        margin: 0 auto;
        font-family: "Times New Roman", Times, serif;
        color: rgb(0,75,0);
        font-size: 1em;
        background-color: rgb(200,255,200);
        border: brown solid 4px;
        border-radius: 25em;     
    }
    .userLinks {
        margin: 0 auto;
        padding: 2px;
        font-family: "Times New Roman", Times, serif;
        color: brown;
        font-size: 1em;
        text-decoration: none;
        background-color: rgb(255,235,210);
        border: rgb(0,75,0) solid 4px;
        border-radius: 25em; 
    }
`

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
      <FormContainer>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">User Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.username}
              type="text" name="username"
              placeholder="Required"
              maxLength="20"
              required />
          </div>
          <div>
            <label htmlFor="campingStyle">Camping Style: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.campingStyle}
              type="text" name="campingStyle"
              // placeholder="Cabin, RV, tent, primitive"
              // { login === true ? placeholder="yup" : placeholder="nope" }
              maxLength="20" />
          </div>
          <div>
            <label htmlFor="userState">State You Live In: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.userState}
              type="text" name="userState"
              placeholder="ie, Georgia or Denial"
              maxLength="20" />
          </div>
          <button type="submit">Create User</button>
          <div>
            <Link
              to={`/`}
              className="userLinks" >All Users Page</Link>
          </div>
        </form>
      </FormContainer>
    )
  }
}

export default LoginForm