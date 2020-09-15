import React from 'react'
import '../App.css'


export const History = (props) => {

    const renderCard = props.cards.map((card) => {
        return (
            <div key = { card.id } >
                <li key = { card.id } className = { (card.cash >= 0) ? "plus" : "minus" }>{ card.detail } <span>${ card.cash }</span><button type = "submit" className="delete-btn" onClick = { () => props.onSubmit(card.id) }>x</button></li>
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
