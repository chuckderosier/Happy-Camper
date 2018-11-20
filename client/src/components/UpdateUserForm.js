import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import { StyledForm } from './FormStyle'

// const FormContainer = styled.StyledForm`
// `

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
        width: 40vw;
        height: 30vh;
        background-color: rgba(255,255,255,.5);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div {
        display: flex;
        align-self: space-between;
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
                        maxlength="20" />
                    </div>
                    <div>
                        <label htmlFor="campingStyle">Camping Style: </label>
                        <input
                        onChange={this.handleChange}
                        value={this.state.user.campingStyle}
                        type="text" name="campingStyle"
                        maxlength="20" />
                    </div>
                    <div>
                        <label htmlFor="userState">State You Live In: </label>
                        <input
                        onChange={this.handleChange}
                        value={this.state.user.userState}
                        type="text" name="userState"
                        maxlength="20" />
                    </div>
                    <button type="submit">Save changes</button>
                </form>
            </FormContainer>
        )
    }
}

export default UpdateForm