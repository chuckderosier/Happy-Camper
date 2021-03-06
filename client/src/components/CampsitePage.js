import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CampsitePageStyles = styled.div`
    margin: 0 auto;
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
    button:hover {
        animation: blinker .5s linear infinite;
        @keyframes blinker {
            50% {
                color: white;
                background-color: rgb(175,0,0)
            } 
        }
    }
`

const DisplayCampsite = styled.div`
    background-color: green;
    margin: 5px auto;
    h3, p {
        margin: 5px auto;
    }
    img {
        float: left;
        width: 48vw;
    }
    .campsite-info {
        float: right;
        width: 48vw;
    }
    .bookButton {
        margin: 10px auto;
    }
    a{
        color: rgb(0,75,0);
        text-align: center;
        padding: .1em .3em;
        background-color: rgb(200,255,200);
        border: brown solid 4px;
        border-radius: 25em;
        text-decoration: none;
    }
`

class CampsitePage extends Component {

    state = {
        user: {},
        campsites: []
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.match.params.userId}/campsites/${this.props.match.params.campsiteId}`).then((res) => {
            this.setState({
                campsites: res.data,
                user: res.data
            })
        })
    }

    handleDelete = () => {
        axios.delete(`/api/users/${this.props.match.params.userId}/campsites/${this.props.match.params.campsiteId}`).then(() => {
            this.props.history.push(`/users/${this.props.match.params.userId}`)
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
                        <h3>Campsite Location: {this.state.campsites.campsiteLocation}</h3>
                        <h3>Camp is open: {this.state.campsites.campsiteOpen}</h3>
                        <p>{this.state.campsites.campsiteDescription}</p>
                        <p>Type of camping available: {this.state.campsites.campsiteType}</p>
                        <h3>Activities at {this.state.campsites.campsiteName}:</h3>
                        <p>{this.state.campsites.campsiteActivities}</p>
                        <div className="bookButton">
                            <a href={this.state.campsites.campsiteLinkToBook}>Book Now</a>
                        </div>
                    </div>
                </DisplayCampsite>
            </CampsitePageStyles>
        )
    }
}

export default CampsitePage