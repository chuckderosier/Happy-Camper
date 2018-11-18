import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserPageStyles = styled.div`
    background-image: "../public/happyCamperBG1.jpg";
    margin: 0 auto;
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .userButtons {
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
const NavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const CampsiteContainer = styled.div`
    width: 20vw;
    background-color: rgb(255,235,210);
    border: rgb(0,75,0) solid 10px;
    margin: 10px;
    padding: 2px auto;
    text-decoration: none;
    color: brown;
    border-radius: 1em;
    .each-campsite {
        color: brown;
        padding: 2px;
        text-decoration: none;
        text-align: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 19vw;
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
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/campsites`).then((res) => {
            this.setState({
                user: res.data,
                campsites: res.data.campsites
            })
        })
    }

    handleDelete = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`).then(() => {
            this.props.history.push('/users')
        })
    }

    render() {
        return (
            <UserPageStyles>
                <h2>{this.state.user.username}'s campsites</h2>
                <div className="header">
                    <h4>Preferred camping style: {this.state.user.campingStyle}</h4>
                    <h4>State you live in : {this.state.user.userState}</h4>
                </div>
                <NavBar>
                    <Link
                        to={`${this.props.match.params.userId}/updateUser`}
                        className="userButtons" >Edit Your Profile</Link>
                    <Link
                        to={`${this.props.match.params.userId}/newCampsite`}
                        className="userButtons" >Add New Campsite</Link>
                    <Link to="/" className="userButtons" >All Users Page</Link>
                    <button onClick={() => this.handleDelete()} >Delete this user</button>
                </NavBar>
                <h3>Click on campsite to see details:</h3>

                {this.state.campsites.map((campsite, i) => (
                    <CampsiteContainer key={i}>
                        <Link
                            to={`/users/${this.state.user._id}/campsites/${campsite._id}`}
                            className="each-campsite" >
                            <img src={campsite.campsiteImg} />
                            <h4>{campsite.campsiteName}</h4>
                            <p>{campsite.campsiteType}</p>
                            <p>{campsite.campsiteLocation}</p>
                            <p>{campsite.campsiteOpen}</p>
                        </Link>
                    </CampsiteContainer>
                ))}
            </UserPageStyles>
        )
    }
}

export default UserPage