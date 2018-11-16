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
            this.props.history.push('/users')
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
                <div>
                    <Link to={`${this.props.match.params.userId}/updateUser`} >Edit your Profile</Link>
                </div>
                <div>
                    <Link to={`${this.props.match.params.userId}/newCampsite`} >Add a new campsite</Link>
                </div>
                <div>
                    <button onClick={() => this.handleDelete()}>This app is garbage get me outta here</button>
                </div>
                <Link to="/">Login Page</Link>
            </div>
        )
    }
}

export default UserPage