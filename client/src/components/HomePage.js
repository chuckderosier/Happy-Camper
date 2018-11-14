import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HomePageStyles = styled.div`
    display: flex;
    justify-content: center;
    .loginButton {
        margin: 0 auto;
        display: flex;
        justify-self: center;
    }
    `

class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/LoginForm/" className="loginButton">Login</Link>
            </div>
        )
    }
}

export default HomePage