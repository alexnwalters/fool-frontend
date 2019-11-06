import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';

class Disclosure extends Component {
    constructor(props){
        super(props)
        this.state = {
            disclosure: {}
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/disclosure', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(res =>
            this.setState({
                disclosure: res
            })
        )            
    }

    render() {
       const { disclosure } = this.state
        return(
            <div className="disclosure">
                <p><a href="https://www.fool.com/PopUps/PrivacyInfo.htm" target="_blank">Privacy/Legal Information</a>.</p>
                <p>
                    Past performance is not a predictor of future results.
                    Individual investment results may vary.
                    All investing involves risk of loss. 
                </p>
                { ReactHtmlParser(disclosure.disclosure) }
            </div>
        )
    }
}

export default Disclosure