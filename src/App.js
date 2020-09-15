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
            transcationDetail : []
        }
    }

    newTranscation = (description, amount) => {
        const newTrans = {
            detail: description,
            cash: amount,
            id: Date.now()
        }

        this.setState ({
            transcationDetail: [...this.state.transcationDetail, newTrans]
        });
    }

    removeTrascation = (id) => {
        //
        this.setState ({
            transcationDetail: this.state.transcationDetail.filter((transc) => transc.id !== id)
        });
    }

    render(){
        return (
            <>
                <div>
                    <Header/>
                    <div className = "container">
                        <Balance trans = { this.state.transcationDetail }/>
                        <IncomeExpense trans = { this.state.transcationDetail }/>
                        <History cards = { this.state.transcationDetail } onSubmit = { this.removeTrascation }/>
                        <AddTranscation onSubmit = { this.newTranscation }/>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
