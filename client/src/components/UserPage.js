import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserPageStyles = styled.div`
    background-image: url("https://i.imgur.com/VaUqmzS.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding: 10px;
    h2, h3, h4 {
        background-color: rgba(255,255,255,.6);
        border-radius: 25em;
        padding: 3px;
        margin: .1em auto;
    }
    h2 {
        font-family: 'Cabin Sketch', cursive;
        font-weight: lighter;
    }
    .header {
        display: flex;
        flex-direction: column;
    }
    .sub-header {
        display: flex;
        flex-direction: row;
        align-items: space-evenly;
    }
    `
const NavBar = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
    .userLinks {
        padding: .2em .3em;
        color: rgb(0,75,0);
        text-align: center;
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
        font-size: 1em;
        border: red solid 4px;
        border-radius: 25em;
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

const CampsiteContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .each-campsite {
        width: 20vw;
        background-color: rgb(255,235,210);
        border: rgb(0,75,0) solid 10px;
        margin: 10px;
        padding: 2px auto;
        text-decoration: none;
        color: brown;
        border-radius: 1em;
        color: brown;
        padding: 2px;
        text-decoration: none;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    img {
        max-width: 19vw;
        max-height: 20vh;
    }
    h4 {
        margin: .2em auto;
    }
    p {
        margin: .2em auto;
    }
`

class UserPage extends Component {

    state = {
        user: {},
        campsites: []
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.match.params.userId}`).then((res) => {
            this.setState({
                user: res.data,
                campsites: res.data.campsites
            })
        })
    }

    handleDelete = () => {
        axios.delete(`/api/users/${this.props.match.params.userId}`).then(() => {
            this.props.history.push('/users')
        })
    }

    render() {
        return (
            <div>
                <UserPageStyles>
                    <div className="header">
                        <h2>{this.state.user.username}'s campsites</h2>
                        <div className="sub-header">
                            <h4>Preferred camping style: {this.state.user.campingStyle}</h4>
                            <h4>State you live in : {this.state.user.userState}</h4>
                        </div>
                        <NavBar>
                            <Link
                                to={`${this.props.match.params.userId}/updateUser`}
                                className="userLinks" >Edit Your Profile</Link>
                            <Link
                                to={`${this.props.match.params.userId}/newCampsite`}
                                className="userLinks" >Add New Campsite</Link>
                            <Link to="/" className="userLinks" >All Users Page</Link>
                            <button onClick={() => this.handleDelete()} >Delete this user</button>
                        </NavBar>
                        <h3>Click on campsite to see details:</h3>
                    </div>
                    <CampsiteContainer>
                        {this.state.campsites.map((campsite, i) => (
                            <Link
                                to={`/users/${this.state.user._id}/campsites/${campsite._id}`}
                                className="each-campsite"
                                key={i} >
                                <img src={campsite.campsiteImg} alt="no pic" />
                                <h4>{campsite.campsiteName}</h4>
                                <p>{campsite.campsiteType}</p>
                                <p>{campsite.campsiteLocation}</p>
                                <p>{campsite.campsiteOpen}</p>
                            </Link>
                        ))}
                    </CampsiteContainer>
                </UserPageStyles>
            </div>
        )
    }
}

export default UserPage