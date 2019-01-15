import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
    background-image: url("https://i.imgur.com/qt49emS.jpg");
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

class UpdateForm extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.match.params.userId}`).then((res) => {
            this.setState({ user: res.data })
        })
    }

    handleChange = (event) => {
        const updatedChangeUser = { ...this.state.user }
        updatedChangeUser[event.target.name] = event.target.value
        this.setState({ user: updatedChangeUser })
    }

    handleUpdate = (event) => {
        event.preventDefault()
        axios.patch(`/api/users/${this.props.match.params.userId}`, this.state.user).then(res => {
            this.props.history.push(`/users/${res.data._id}`)
        })
    }

    render() {
        return (
            <FormContainer>
                <form onSubmit={this.handleUpdate}>
                    <div>
                        <label htmlFor="username">User Name: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.user.username}
                            type="text" name="username"
                            maxLength="20" />
                    </div>
                    <div>
                        <label htmlFor="campingStyle">Camping Style: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.user.campingStyle}
                            type="text" name="campingStyle"
                            maxLength="20" />
                    </div>
                    <div>
                        <label htmlFor="userState">State You Live In: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.user.userState}
                            type="text" name="userState"
                            maxLength="20" />
                    </div>
                    <button type="submit">Save changes</button>
                    <div>
                        <Link
                            to={`/users/${this.props.match.params.userId}`}
                            className="userLinks" >Your Campsites Page</Link>
                    </div>
                </form>
            </FormContainer>
        )
    }
}

export default UpdateForm