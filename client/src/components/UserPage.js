import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

class UserPage extends Component {

    state = {
        user: {},
        campsites: []
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/campsites`).then((res) => {
            this.setState({
                user: res.data,
                campsites: res.data.campsites
            })
        })
    }

    handleDelete = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`).then(() => {
            const newUsers = [...this.state.users]
            const filtered = newUsers.filter(user => {
                return user._id !== userId
            })
            this.setState({ users: filtered })
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.user.username}'s campsites</h3>
                <h4>Preferred camping style: {this.state.user.campingStyle}</h4>
                <h4>State you live in : {this.state.user.userState}</h4>
                <div>
                    {this.state.campsites.map((campsite, i) => (
                        <div key={i}>
                            <Link to={`/users/${this.state.user._id}/campsites/${campsite._id}`}>{campsite.campsiteName}</Link>
                        </div>
                    ))}
                </div>
                <Link to="/newCamp">Add a new campsite</Link>
                <button onClick={() => this.handleDelete()}>This app is garbage get me outta here</button>
                <Link to="/">Login Page</Link>
            </div>
        )
    }
}

export default UserPage