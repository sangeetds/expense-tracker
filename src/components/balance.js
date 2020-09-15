import React from 'react'
import '../App.css'

export const Balance = (props) => {
    return(
        <h3>Your Balance: <br/>
            <h1>${ props.balance }</h1>
        </h3>
    )
}
