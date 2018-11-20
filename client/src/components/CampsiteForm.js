import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
    background-image: url("/images/happyCamperBG3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    form {
        margin: .3em auto;
        padding: 15px;
        width: 40vw;
        height: 70vh;
        background-color: rgba(255,255,255,.5);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    div {
        margin: 0 auto;
    }
    button {
        margin: 0 auto;
        font-family: "Times New Roman", Times, serif;
        color: rgb(0,75,0);
        font-size: 1em;
        background-color: rgb(200,255,200);
        border: brown solid 4px;
        border-radius: 25em;     
    }
    .userLinks {
        margin: 0 auto;
        padding: 5px;
        font-family: "Times New Roman", Times, serif;
        color: brown;
        font-size: 1em;
        text-decoration: none;
        background-color: rgb(255,235,210);
        border: rgb(0,75,0) solid 4px;
        border-radius: 25em; 
    }
`

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
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="campsiteName">Campsite Name: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newCampsite.campsiteName}
                            type="text" name="campsiteName"
                            placeholder="Required"
                            maxLength="20"
                            required />
                    </div>
                    <div>
                        <label htmlFor="campsiteLocation">Campsite location: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newCampsite.campsiteLocation}
                            type="text" name="campsiteLocation"
                            placeholder="State, Park Name, Part of State"
                            maxLength="20" />
                    </div>
                    <div>
                        <label htmlFor="campsiteType">Camping types: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newCampsite.campsiteType}
                            type="text" name="campsiteType"
                            placeholder="ie, Cabin, RV, tent, primitive" 
                            maxLength="30" />
                    </div>
                    <div>
                        <label htmlFor="campsiteOpen">Campsite is open: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newCampsite.campsiteOpen}
                            type="text" name="campsiteOpen"
                            placeholder="Year Round, Closed, Spring, Summer, Fall" 
                            maxLength="40" />
                    </div>
                    <div>
                        <label htmlFor="campsiteDescription">Campsite description: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newCampsite.campsiteDescription}
                            type="text" name="campsiteDescription"
                            placeholder="Your thoughts on the camp" />
                    </div>
                    <div>
                        <label htmlFor="campsiteActivities">Campsite activities: </label>
                        <input onChange={this.handleChange}
                            value={this.state.newCampsite.campsiteActivities}
                            type="text" name="campsiteActivities"
                            placeholder="Swimming, Hiking, Boating, Fishing, Hunting, Education" />
                    </div>
                    <div>
                        <label htmlFor="campsiteLinkToBook">Link to book campsite: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newCampsite.campsiteLinkToBook}
                            type="text" name="campsiteLinkToBook"
                            placeholder="Link to booking website" />
                    </div>
                    <div>
                        <label htmlFor="campsiteImg">Link to image of campsite: </label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newCampsite.campsiteImg}
                            type="text" name="campsiteImg"
                            placeholder="Link to an image of the campsite" />
                    </div>
                    <button type="submit">Create Campsite</button>
                    <div>
                        <Link
                            to={`/users/${this.props.match.params.userId}`}
                            className="userLinks" >Your Campsite Page</Link>
                    </div>
                </form>
            </FormContainer>
        )
    }
}

export default CampsiteForm