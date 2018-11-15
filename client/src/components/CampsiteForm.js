import React, { Component } from 'react'
import axios from 'axios'

// state = {
//     campsites: [],
//     newUser: {
//       username: '',
//       password: ''
//     }
//   }

//   handleChange = (event) => {
//     console.log('name', event.target.name)
//     console.log('value', event.target.value)
//     const updatedNewUser = { ...this.state.newUser }

//     updatedNewUser[event.target.name] = event.target.value
//     this.setState({ newUser: updatedNewUser })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()

//     // Make post to our api to create new user
//     axios.post('/api/users', this.state.newUser).then(res => {
//       // when we get that data back, we need to navigate to the new users page
//       console.log(res.data)
//       this.props.history.push(`/users/${res.data._id}`)
//     })

//   }


class CampsiteForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="campsiteName">Campsite Name: </label>
                        {/* <input onChange={this.handleChange} value={this.state.newCampsite.campsiteName} type="text" name="campsiteName" /> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default CampsiteForm