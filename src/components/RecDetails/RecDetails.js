import React from 'react'
import './RecDetails.css'

export default function RecDetails(props) {
    return(
        <div className='details'>
            <p className='symbol'>{props.symbol}</p>
            <p className='company'>{props.company}</p>
            <p className='return'>{(props.return > 0)
                ? <span className="green">{parseFloat(props.return).toFixed(2)}%</span>
                : <span className="red">{parseFloat(props.return).toFixed(2)}%</span>
            }</p>
        </div>
    )
}