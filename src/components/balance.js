import React from 'react'
import '../App.css'

export const Balance = (props) => {
    const balance = props.trans.reduce((previous, current) => parseInt(previous) + parseInt(current.cash), 0)
    
    return(
        <h3>Your Balance: <br/>
            <h1>${ balance }</h1>
        </h3>
    )
}
