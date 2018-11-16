import React, { Component } from 'react'
import axios from 'axios'
// import styled from 'styled-components'


class CampsiteForm extends Component {

    state = {
        campsites: [],
        newCampsite: {
            campsiteName: '',
            campsiteLocation: '',
            campsiteType: '',
            campsiteOpen: '',
            campsiteDescription: '',
            campsiteActivities: '',
            campsiteLinkToBook: '',
            campsiteImg: ''
        }
    }

    handleChange = (event) => {
        const updatedNewCampsite = { ...this.state.newCampsite }
        updatedNewCampsite[event.target.name] = event.target.value
        this.setState({ newCampsite: updatedNewCampsite })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`/api/users/${this.props.match.params.userId}/campsites`, this.state.newCampsite).then(res => {
            this.props.history.push(`/users/${this.props.match.params.userId}`)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="campsiteName">Campsite Name: </label>
                        <input onChange={this.handleChange} value={this.state.newCampsite.campsiteName} type="text" name="campsiteName" />
                    </div>
                    <div>
                        <label htmlFor="campsiteLocation">Campsite location: </label>
                        <input onChange={this.handleChange} value={this.state.newCampsite.campsiteLocation} type="text" name="campsiteLocation" />
                    </div>
                    <div>
                        <label htmlFor="campsiteType">Camping types: </label>
                        <input onChange={this.handleChange} value={this.state.newCampsite.campsiteType} type="text" name="campsiteType" placeholder="ie, Cabin, RV, tent, primitive" />
                    </div>
                    <div>
                        <label htmlFor="campsiteOpen">Campsite is open: </label>
                        <input onChange={this.handleChange} value={this.state.newCampsite.campsiteOpen} type="text" name="campsiteOpen" />
                    </div>
                    <div>
                        <label htmlFor="campsiteDescription">Campsite description: </label>
                        <input onChange={this.handleChange} value={this.state.newCampsite.campsiteDescription} type="text" name="campsiteDescription" />
                    </div>
                    <div>
                        <label htmlFor="campsiteActivities">Campsite activities: </label>
                        <input onChange={this.handleChange} value={this.state.newCampsite.campsiteActivities} type="text" name="campsiteActivities" />
                    </div>
                    <div>
                        <label htmlFor="campsiteLinkToBook">Link to book campsite: </label>
                        <input onChange={this.handleChange} value={this.state.newCampsite.campsiteLinkToBook} type="text" name="campsiteLinkToBook" />
                    </div>
                    <div>
                        <label htmlFor="campsiteImg">Link to image of campsite: </label>
                        <input onChange={this.handleChange} value={this.state.newCampsite.campsiteImg} type="text" name="campsiteImg" />
                    </div>
                    <button type="submit">Create Campsite</button>
                </form>
            </div>
        )
    }
}

export default CampsiteForm