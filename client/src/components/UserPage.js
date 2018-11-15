import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import styled from 'styled-components'
// import User from 'User'

class UserPage extends Component {

    state = {
        campsites: []
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/campsites`).then((res) => {
            console.log(res.data)
            this.setState({ campsites: res.data })
        })
    }

    render() {
        return (
            <div>
                <h3>Your campsites</h3>
                <div>
                    {this.state.campsites.map((campsite) => (
                        <div key={campsite._id}>
                            <Link to={`/users/:userId/campsites/${campsite._id}`}>{campsite.campsiteName}</Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default UserPage