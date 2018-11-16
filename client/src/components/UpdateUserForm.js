import React, { Component } from 'react'
import axios from 'axios'

class UpdateForm extends Component {

    state = {
        users: [],
        changeUser: {
            username: '',
            campingStyle: '',
            userState: ''
        }
    }

    handleChange = (event) => {
        const updatedChangeUser = { ...this.state.changeUser }
        updatedChangeUser[event.target.name] = event.target.value
        this.setState({ changeUser: updatedChangeUser })
        // console.log("end h", changeUser)
    }

    handleUpdate = (event) => {
        event.preventDefault()
        axios.patch(`/api/users/${this.props.match.params.userId}`, this.state.changeUser).then(res => {
            this.props.history.push(`/users/${res.data._id}`)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleUpdate}>
                    <div>
                        <label htmlFor="username">User Name: </label>
                        <input onChange={this.handleChange} value={this.state.changeUser.username} type="text" name="username" placeholder="ie, Grizzly Adams" />
                    </div>
                    <div>
                        <label htmlFor="campingStyle">Camping Style: </label>
                        <input onChange={this.handleChange} value={this.state.changeUser.campingStyle} type="text" name="campingStyle" placeholder="Cabin, RV, tent, primitive" />
                    </div>
                    <div>
                        <label htmlFor="userState">State You Live In: </label>
                        <input onChange={this.handleChange} value={this.state.changeUser.userState} type="text" name="userState" placeholder="ie, Georgia or Denial" />
                    </div>
                    <button type="submit">Save changes</button>
                </form>
            </div>
        )
    }
}

export default UpdateForm