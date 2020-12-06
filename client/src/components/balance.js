import React from 'react'
import '../App.css'

export const Balance = (props) => {
    const balance = props.trans.reduce((previous, current) => parseInt(previous) + parseInt(current.amount), 0)

    return(
        <h3>Your Balance: <br/>
            ${ balance }
        </h3>
    )
}
