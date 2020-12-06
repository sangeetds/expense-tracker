import React from 'react'
import '../App.css'


export const History = (props) => {

    const renderCard = props.cards.map((card) => {
        console.log(card);
        return (
            <div key = { card._id } >
                <li key = { card._id } className = { (card.amount >= 0) ? "plus" : "minus" }>{ card.text } <span>${ card.amount }</span><button type = "submit" className="delete-btn" onClick = { () => props.onSubmit(card._id) }>x</button></li>
            </div>
            );
    });

    return(
        <div className = "container">
            <h3> History </h3>
            <div>
                <ul className = "list">
                    { renderCard }
                </ul>
            </div>
        </div>
    )
}
