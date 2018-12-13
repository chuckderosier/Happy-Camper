import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
    background-image: url("public/images/happyCamperBG3.jpg");
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
        width: 50vw;
        height: 90vh;
        background-color: rgba(255,255,255,.5);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    div {
        display: flex;
        flex-direction: column;
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

    handleUpdate = (event) => {
        event.preventDefault()
        axios.patch(`/api/users/${this.props.match.params.userId}/campsites/${this.props.match.params.campsiteId}`, this.state.campsite).then(res => {
            this.props.history.push(`/users/${this.props.match.params.userId}/campsites/${this.props.match.params.campsiteId}`)
        })
    }

    render() {
        return (
            <FormContainer>
                <form onSubmit={this.handleUpdate}>
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
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.campsite.campsiteDescription}
                            type="text" name="campsiteDescription"
                            rows="4" cols="30"
                            maxLength="200" />
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
                    <div>
                        <Link
                            to={`/users/${this.props.match.params.userId}/campsites/${this.props.match.params.campsiteId}`}
                            className="userLinks" >Return To Campsite Page</Link>
                    </div>
                </form>
            </FormContainer>
        )
    }
}

export default UpdateCampsiteForm