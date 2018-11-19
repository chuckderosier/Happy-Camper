import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CampsitePageStyles = styled.div`

`

const NavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    .userLinks {
        color: rgb(0,75,0);
        text-align: center;
        padding: .2em .3em;
        background-color: rgb(200,255,200);
        border: brown solid 4px;
        border-radius: 25em;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        font-family: "Times New Roman", Times, serif;
        background-color: rgb(255,235,230);
        color: rgb(200,0,0);
        border: red solid 4px;
        border-radius: 25em;
        font-size: 1em;
        border-color: red;
    }
`

const DisplayCampsite = styled.div`
    background-color: green;
    margin: 5px auto;
    img {
        float: left;
        width: 48vw;
        /* width: 48%; */
    }
    .campsite-info {
        float: right;
        width: 48vw;
        /* width: 48%; */
    }
`

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
            <CampsitePageStyles>
                <h1>{this.state.campsites.campsiteName}</h1>
                <NavBar>
                    <Link
                        to={`${this.props.match.params.campsiteId}/updateCampsite`}
                        className="userLinks" >Update Campsite Info</Link>
                    <Link
                        to={`/users/${this.props.match.params.userId}`}
                        className="userLinks" >Your Campsites Page</Link>
                    <Link to='/' className="userLinks" >Return to Home page</Link>
                    <button onClick={() => this.handleDelete()}>Delete This Campsite</button>
                </NavBar>
                <DisplayCampsite>
                    <img src={this.state.campsites.campsiteImg} alt="alt" />
                    <div className="campsite-info">
                        <h4>{this.state.campsites.campsiteLocation}</h4>
                        <h3>Camp is open: {this.state.campsites.campsiteOpen}</h3>
                        <p>{this.state.campsites.campsiteDescription}</p>
                        <p>Type of camping available: {this.state.campsites.campsiteType}</p>
                        <h5>Activities at {this.state.campsites.campsiteName}:</h5>
                        <p>{this.state.campsites.campsiteActivities}</p>
                        <a href={this.state.campsites.campsiteLinkToBook}>Book now</a>
                    </div>
                </DisplayCampsite>
            </CampsitePageStyles>
        )
    }
}

export default CampsitePage