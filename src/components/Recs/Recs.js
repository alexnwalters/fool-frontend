import React, { Component } from 'react'
import ApiServices from '../../services/ApiServices'
import RecDetails from '../RecDetails/RecDetails'
import './Recs.css'

class Recs extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            recs: {},
            moreRecs: false
        }
    }

    componentDidMount() {
        ApiServices.getRecs()
            .then(res =>
                this.setState({
                    recs: res.recs
                })
            )
            .catch(res => {
                this.setState({error: "Oh no, we can find the Recs, this usually doesn't happen."})
            })            
    }

    addMore = (e) => {
        this.setState({
            moreRecs: true
        })
    }

    renderRecs() {
        const { recs, moreRecs } = this.state

        recs.sort(function (a, b) {
            return b.return - a.return
        })

        const topFive = recs.slice(0, 5)

        const nextFive = recs.filter(function(rec) {
            return !topFive.includes(rec);            
        })

        nextFive.sort(() => Math.random() - 0.5)

        return (
            <div>
                <div><h3>Top 5 Best Performing Recommendations</h3>
                    {topFive.map((rec, i) => {
                        return <div key={i}><RecDetails {...rec} /></div>
                    })}
                </div>
                {moreRecs
                    ?   <div><h3>A Few More...</h3>
                            {nextFive.map((rec, i) => {
                                return <div key={i}><RecDetails {...rec} /></div>
                            })}
                        </div>
                    :   <button onClick={this.addMore}>Show more</button>
                }
            </div>
        )    
    }

    render() {
        const { recs, error } = this.state
        return (
            <div className='recs'>
                {error
                    ? <p className='red'>{ error }</p>
                    : recs.length
                        ? this.renderRecs()
                        : <p>Loading...</p>
                }
            </div>
        )
    }
}

export default Recs