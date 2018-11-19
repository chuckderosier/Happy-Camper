import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePageStyles = styled.div`
    background-image: "../../public/images/happyCamperBG1.jpg";
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
        border-radius: 25em;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `
const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .user-link {
        width: 20vw;
        height: 5vh;
        background-color: rgb(255,235,210);
        border: rgb(0,75,0) solid 10px;
        margin: 10px;
        padding: 2px auto;
        text-decoration: none;
        color: brown;
        display: flex;
        justify-content: center;
        align-items: center;
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
                <UserContainer>
                    {this.state.users.map((user) => (
                        <Link to={`/users/${user._id}`} className="user-link" key={user._id}>{user.username}</Link>
                    ))}
                </UserContainer>
            </HomePageStyles>
        )
    }
}

export default HomePage