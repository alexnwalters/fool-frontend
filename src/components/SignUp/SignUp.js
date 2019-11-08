import React, { Component } from 'react'
import ApiServices from '../../services/ApiServices'
import FoolTracker from '../../services/tracker'
import './SignUp.css'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { email } = e.target
        const newEmail = new FormData()

        newEmail.append('email', email.value)

        const tracker = new FoolTracker(e.type, {
            timeStamp: e.timeStamp,
            email: email.value,
        })

        ApiServices.postEmail(newEmail)
            .then(res => {
                tracker.trackEvent('success', res)
                window.location.href = res.campaign_url
            })
            .catch(res => {
                this.setState({error: "Oops, something went wrong. That's on us."})
            })
    }

    render() {
        const { error } = this.state
        return(
            <div className='signup'>
                <h2>Sign Up Today!</h2>
                <div role='alert'>
                    {error && <p className='red'>{ error }</p>}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Your Email: </label>
                    <input type='email' name='email' id='email' required/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default SignUp