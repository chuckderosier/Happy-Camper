import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePageStyles = styled.div`
    background-image: "../public/happyCamperBG1.jpg";
    margin: 0 auto;
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .newUserButton {
        color: rgb(0,75,0);
        text-align: center;
        width: 30vw;
        height: 5vh;
        background-color: rgb(200,255,200);
        border: brown solid 4px;
        border-radius: 25px;
        text-decoration: none;
    }
    .user-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .user-link {
        text-decoration: none;
    }
    `

class HomePage extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get('/api/users').then((res) => {
            this.setState({ users: res.data })
        })
    }

    render() {
        return (
            <HomePageStyles>
                <div className="header">
                    <h1>Happy Camper App</h1>
                    <p>App to save you favorite campsites and the details about them</p>
                    <Link to="/login" className="newUserButton">Create New User</Link>
                    <h3>Click on user name to see their campsites</h3>
                </div>
                {this.state.users.map((user) => (
                    <div key={user._id} className="user-container">
                        <Link to={`/users/${user._id}`} className="user-link">{user.username}</Link>
                    </div>
                ))}
            </HomePageStyles>
        )
    }
}

export default HomePage