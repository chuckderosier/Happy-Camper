import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePageStyles = styled.div`
    margin: 0 auto;
    background-color: black;
    width: 10vw;
    padding: 3px;
    display: flex;
    justify-content: center;
    .loginButton {
        color: white;
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
            <div>
                <div>
                    <h1>Log-In To See Your Campsites</h1>
                    <h3>All Users: </h3>
                    {this.state.users.map((user) => (
                        <div key={user._id}>
                            <Link to={`/api/UserPage/${user._id}`}>{user.username}</Link>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Click on login to create your user</h3>
                    <HomePageStyles>
                        <Link to="/api/LoginForm/" className="loginButton">Login</Link>
                    </HomePageStyles>
                </div>
            </div>
        )
    }
}

export default HomePage