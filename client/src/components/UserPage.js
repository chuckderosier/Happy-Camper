import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import styled from 'styled-components'

class UserPage extends Component {

    state = {
        user: {},
        campsites: []
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/campsites`).then((res) => {
            console.log(res.data)
            this.setState({
                user: res.data,
                campsites: res.data.campsites
            })
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.user.username}'s' campsites</h3>
                <div>
                    {this.state.campsites.map((campsite, i) => (
                        <div key={i}>
                            <Link to={`/users/${this.state.user._id}/campsites/${campsite._id}`}>{campsite.campsiteName}</Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default UserPage