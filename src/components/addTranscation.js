import React, { useState } from 'react'
import '../App.css'

export const AddTranscation = (props) => {
    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);

    const addList = (e) => {
        e.preventDefault()

        props.onSubmit(text, amount);

        setText('')
        setAmount('')
    }

    return(
        <>
            <h3> Add New Transcation </h3>
            <form  onSubmit = { addList }>
                <div className="form-control">
                    <label htmlFor="text" className = "label"><h4>Text</h4></label>
                    <input type="text" value = { text } onChange = {(e) => setText(e.target.value) } placeholder="Enter text.." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount" className = "label"><h4>Amount</h4></label>
                    <input type="number" value = { amount } onChange = {(e) => setAmount(e.target.value) } placeholder="Enter amount.." />
                </div>
                <button type="submit" className = "btn">Add Transcation</button>
            </form>
        </>
    )
}
