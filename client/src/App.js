import React, { Component } from 'react'

import { Header } from './components/header'
import { Balance } from './components/balance'
import { History } from './components/history'
import { IncomeExpense } from './components/incomeExpense'
import { AddTranscation } from './components/addTranscation'

import axios from "axios";

import './App.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            transcationDetail: []
        }
    }

    componentDidMount() {
        axios.get('/api/v1/transcations').then(res => {
            this.setState( { transcationDetail: res.data.data } );
        })
    }

    newTranscation = (description, amount) => {
        const newTrans = {
            text: description,
            amount: parseInt(amount)
        }

        axios.post('/api/v1/transcations', { newTrans });

        this.setState( {
            transcationDetail: [...this.state.transcationDetail, newTrans]
        })
    }

    removeTrascation = (id) => {
        const URL = `/api/v1/transcations/${id}`
        axios.delete(URL)

        this.setState( {
            transcationDetail: this.state.transcationDetail.filter(transaction => transaction._id !== id)
        } );
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
