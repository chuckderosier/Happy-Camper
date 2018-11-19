import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

    handleDelete = () => {
        const campsiteId = this.props.match.params.campsiteId
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}/campsites/${campsiteId}`).then(() => {
            this.props.history.push(`/users/${userId}`)
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.campsites.campsiteName}</h1>
                <div>
                    <Link to={`${this.props.match.params.campsiteId}/updateCampsite`} >Update Campsite Info</Link>
                    <Link to={`/users/${this.props.match.params.userId}`}>Your Campsites Page</Link>
                    <Link to='/'>Return to Home page</Link>
                    <button onClick={() => this.handleDelete()}>Delete This Campsite</button>
                </div>
                <h4>{this.state.campsites.campsiteLocation}</h4>
                <h3>Camp is open: {this.state.campsites.campsiteOpen}</h3>
                <img src={this.state.campsites.campsiteImg} alt="alt" />
                <p>{this.state.campsites.campsiteDescription}</p>
                <p>Type of camping available: {this.state.campsites.campsiteType}</p>
                    <h5>Activities at {this.state.campsites.campsiteName}:</h5>
                    <p>{this.state.campsites.campsiteActivities}</p>
                <a href={this.state.campsites.campsiteLinkToBook}>Book now</a>
            </div>
        )
    }
}

export default CampsitePage