import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import ApiServices from '../../services/ApiServices';
import './Disclosure.css'

class Disclosure extends Component {
    constructor(props){
        super(props)
        this.state = {
            disclosure: {},
            error: null
        }
    }

    componentDidMount() {
        ApiServices.getDisclosures()
            .then(res =>
                this.setState({
                    disclosure: res
                })
            )
            .catch(res => {
                this.setState({error: "Error when fetching the disclosures, but you were't going to read them any way."})
            })            
    }

    render() {
       const { disclosure, error } = this.state
        return(
            <div className='disclosure'>
                <p><a href='https://www.fool.com/PopUps/PrivacyInfo.htm' target='_blank' rel='noopener noreferrer'>Privacy/Legal Information</a>.</p>
                <p>
                    Past performance is not a predictor of future results.
                    Individual investment results may vary.
                    All investing involves risk of loss. 
                </p>
                <div role='alert'>
                    {error && <p className='red'>{ error }</p>}
                </div>
                { ReactHtmlParser(disclosure.disclosure) }
            </div>
        )
    }
}

export default Disclosure