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
            console.log(res.data)
            this.setState({
                campsites: res.data,
                user: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {/* <h1>{this.props.campsiteName}</h1> */}
                {/* <h1>{campsites.campsiteName}</h1> */}
                <h3>camp page</h3>
            </div>
        );
    }
}

export default CampsitePage