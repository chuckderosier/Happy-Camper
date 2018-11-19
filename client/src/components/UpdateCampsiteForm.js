import React, { Component } from 'react'
import axios from 'axios'

class UpdateCampsiteForm extends Component {

    state = {
        campsite: {}
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.match.params.userId}/campsites/${this.props.match.params.campsiteId}`).then((res) => {
            this.setState({ campsite: res.data })
        })
    }

    handleChange = (event) => {
        const updatedChangeCampsite = { ...this.state.campsite }
        updatedChangeCampsite[event.target.name] = event.target.value
        this.setState({ campsite: updatedChangeCampsite })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.patch(`/api/users/${this.props.match.params.userId}/campsites/${this.props.match.params.campsiteId}`, this.state.campsite).then(res => {
            this.props.history.push(`/users/${this.props.match.params.userId}/campsites/${this.props.match.params.campsiteId}`)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="campsiteName">Campsite Name: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteName}
                            type="text" name="campsiteName" />
                    </div>
                    <div>
                        <label htmlFor="campsiteLocation">Campsite location: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteLocation}
                            type="text" name="campsiteLocation" />
                    </div>
                    <div>
                        <label htmlFor="campsiteType">Camping types: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteType}
                            type="text" name="campsiteType"
                            placeholder="ie, Cabin, RV, tent, primitive" />
                    </div>
                    <div>
                        <label htmlFor="campsiteOpen">Campsite is open: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteOpen}
                            type="text" name="campsiteOpen" />
                    </div>
                    <div>
                        <label htmlFor="campsiteDescription">Campsite description: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteDescription}
                            type="text" name="campsiteDescription" />
                    </div>
                    <div>
                        <label htmlFor="campsiteActivities">Campsite activities: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteActivities}
                            type="text" name="campsiteActivities" />
                    </div>
                    <div>
                        <label htmlFor="campsiteLinkToBook">Link to book campsite: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteLinkToBook}
                            type="text" name="campsiteLinkToBook" />
                    </div>
                    <div>
                        <label htmlFor="campsiteImg">Link to image of campsite: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteImg}
                            type="text" name="campsiteImg" />
                    </div>
                    <button type="submit">Save changes</button>
                </form>
            </div>
        )
    }
}

export default UpdateCampsiteForm