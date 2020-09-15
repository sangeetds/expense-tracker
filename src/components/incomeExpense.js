import React from 'react'
import '../App.css'

export const IncomeExpense = (props) => {
    return(
        <div className = "inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className = "money plus">${ props.income }</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className = "money minus">${ props.expense } </p>
            </div>
        </div>
    )
}
