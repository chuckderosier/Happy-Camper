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

    // state = {
    //     user: []
    // }

    // componentDidMount() {
    //     const userId = this.props.match.params.userId
    //     axios.get(`/api/users/${userId}`).then(res => {
    //         console.log(res.data)
    //         this.setState({
    //             user: res.data,
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                <h3>Click on login to create your user or login</h3>
                <HomePageStyles>
                    <Link to="/api/LoginForm/" className="loginButton">Login</Link>
                </HomePageStyles>
            </div>
        )
    }
}

export default HomePage