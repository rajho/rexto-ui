import React, {Component} from 'react'
import CurrencyExchangeLayout from '../components/currency-exchange-layout'

class CurrencyExchange extends Component {
    state = {
        fromCurrencyAmount: null,
        toCurrencyAmount: null
    }
    inputFromCurrency = React.createRef()
    inputToCurrency = React.createRef()

    getMoneyExchanged = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then( results => {
                return results.json()
            }).then(data => {
                console.log("json", data)
            })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let toCurrencyAmount =  this.state.fromCurrencyAmount + 2
        this.getMoneyExchanged();
        //this.setState({toCurrencyAmount: toCurrencyAmount})
    }
    handleChangeFromCurrency = (event) => {
        event.preventDefault()
        if (event.target.value) {
            this.setState({fromCurrencyAmount: parseInt(event.target.value, 10)})
        }
    }
    handleChangeToCurrency = (event) => {
        event.preventDefault()
    }
    render() {
        return(
            <CurrencyExchangeLayout
                handleChangeFromCurrency={this.handleChangeFromCurrency}
                handleChangeToCurrency={this.handleChangeToCurrency}
                setFromCurrencyRef={this.inputFromCurrency}
                setToCurrencyRef={this.inputToCurrency}
                fromAmount={this.state.fromCurrencyAmount || ''}
                toAmount={this.state.toCurrencyAmount || ''}
                handleSubmit={this.handleSubmit}/>
        )
    }
}

export default CurrencyExchange