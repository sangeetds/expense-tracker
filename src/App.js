import React, { Component } from 'react'

import { Header } from './components/header'
import { Balance } from './components/balance'
import { History } from './components/history'
import { IncomeExpense } from './components/incomeExpense'
import { AddTranscation } from './components/addTranscation'

import './App.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            balance: 0,
            income: 0,
            expense: 0,
            transcationDetail : []
        }
    }

    newTranscation = (description, amount) => {
        const newTrans = {
            detail: description,
            cash: amount,
            id: Date.now()
        }

        const incomeIncrease = (amount >= 0) ? parseInt(amount) + parseInt(this.state.income) : parseInt(this.state.income);
        const expenseIncrease = (amount < 0) ? parseInt(this.state.expense) - parseInt(amount) : parseInt(this.state.expense);

        this.setState ({
            balance: parseInt(this.state.balance) + parseInt(amount),
            income: incomeIncrease,
            expense: expenseIncrease,
            transcationDetail: [...this.state.transcationDetail, newTrans]
        });
    }

    removeTrascation = (id) => {
        const toRemove = this.state.transcationDetail.filter((transc) => transc.id === id)[0]
        //
        const incomeIncrease = (toRemove.cash >= 0) ? parseInt(this.state.income) - parseInt(toRemove.cash) : parseInt(this.state.income);
        const expenseIncrease = (toRemove.cash < 0) ? parseInt(this.state.expense) + parseInt(toRemove.cash) : parseInt(this.state.expense);

        console.log(toRemove);
        console.log(incomeIncrease);
        console.log(expenseIncrease);
        console.log(toRemove.cash);

        //
        this.setState ({
            balance: parseInt(this.state.balance) - parseInt(toRemove.cash),
            income: incomeIncrease,
            expense: expenseIncrease,
            transcationDetail: this.state.transcationDetail.filter((transc) => transc.id !== id)
        });
    }

    render(){
        return (
            <>
                <div>
                    <Header/>
                    <div className = "container">
                        <Balance balance = { this.state.balance }/>
                        <IncomeExpense income = { this.state.income } expense = { this.state.expense }/>
                        <History cards = { this.state.transcationDetail } onSubmit = { this.removeTrascation }/>
                        <AddTranscation onSubmit = { this.newTranscation }/>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
