import React, { Component } from 'react'
import axios from 'axios'

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
            <div>
                <form onSubmit={this.handleUpdate}>
                    <div>
                        <label htmlFor="username">User Name: </label>
                        <input
                        onChange={this.handleChange}
                        value={this.state.user.username}
                        type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="campingStyle">Camping Style: </label>
                        <input
                        onChange={this.handleChange}
                        value={this.state.user.campingStyle}
                        type="text" name="campingStyle" />
                    </div>
                    <div>
                        <label htmlFor="userState">State You Live In: </label>
                        <input
                        onChange={this.handleChange}
                        value={this.state.user.userState}
                        type="text" name="userState" />
                    </div>
                    <button type="submit">Save changes</button>
                </form>
            </div>
        )
    }
}

export default UpdateForm