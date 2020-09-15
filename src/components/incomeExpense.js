import React from 'react'
import '../App.css'

export const IncomeExpense = (props) => {

    const income = props.trans.reduce((previous, current) => {
        const ret = (parseInt(current.cash) >= 0) ? parseInt(previous) + parseInt(current.cash) : parseInt(previous);
        return ret;
    }, 0)
    const expense = props.trans.reduce((previous, current) => {
        const ret = (parseInt(current.cash) < 0) ? parseInt(previous) + parseInt(current.cash) : parseInt(previous);
        return ret;
    }, 0)

    return(
        <div className = "inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className = "money plus">${ income }</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className = "money minus">${ expense } </p>
            </div>
        </div>
    )
}
