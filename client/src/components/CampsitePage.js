import React, { Component } from 'react'
import axios from 'axios'

class CampsitePage extends Component {

    state = {
        user: {},
        campsites: []
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        const campsiteId = this.props.match.params.campsiteId
        axios.get(`/api/users/${userId}/campsites/${campsiteId}`).then((res) => {
            this.setState({
                campsites: res.data,
                user: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.campsites.campsiteName}</h1>
                <h4>{this.state.campsites.campsiteLocation}</h4>
                <h3>Camp is open: {this.state.campsites.campsiteOpen}</h3>
                <img src={this.state.campsites.campsiteImg} />
                <p>{this.state.campsites.campsiteDescription}</p>
                <p>Type of camping available: {this.state.campsites.campsiteType}</p>
                <div>
                    <h5>Activities at {this.state.campsites.campsiteName}:</h5>
                    <p>{this.state.campsites.campsiteActivities}</p>
                </div>
                <a href={this.state.campsites.campsiteLinkToBook}>Book now</a>
            </div>
        )
    }
}

export default CampsitePage