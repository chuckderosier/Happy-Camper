import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePageStyles = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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
                <h1>Happy Camper App</h1>
                <p>App to save you favorite campsites and the details about them</p>
                <div>
                    <Link to="/login" className="loginButton">Create New User</Link>
                </div>
                <h2>Click on user name to see their campsites</h2>
                {this.state.users.map((user) => (
                    <div key={user._id}>
                        <Link to={`/users/${user._id}`}>{user.username}</Link>
                    </div>
                ))}
            </HomePageStyles>
        )
    }
}

export default HomePage