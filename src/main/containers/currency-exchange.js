import React, {Component} from 'react'
import CurrencyExchangeLayout from '../components/currency-exchange-layout'

class CurrencyExchange extends Component {
    state = {
        fromCurrencyAmount: 0,
        toCurrencyAmount: 0,
        fromCurrencyLabel: '',
        toCurrencyLabel: ''
    }
    inputFromCurrency = React.createRef()
    inputToCurrency = React.createRef()

    getMoneyExchanged = () => {
        fetch("/api/latest/convert/?q=USD_EUR")
            .then( results => {
                return results.json()
            }).then(data => {
                console.log("json", data.results.exchangeRate)
                let targetCurrencyAmount = data.results.exchangeRate * this.state.fromCurrencyAmount
                this.setState({
                    toCurrencyAmount: targetCurrencyAmount,
                    toCurrencyLabel: '$ ' + this.numberWithCommas(targetCurrencyAmount)
                })
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
            let idxNumberBegins
            let fromCurrencyAmount

            console.log(event.target.value)
            if (event.target.value.indexOf(' ') > -1){
                idxNumberBegins = event.target.value.indexOf(' ') + 1
                fromCurrencyAmount = event.target.value.substr(idxNumberBegins).replace(/,/g,'')
            } else {
                fromCurrencyAmount = event.target.value
            }

            fromCurrencyAmount = parseFloat(fromCurrencyAmount)
            console.log(idxNumberBegins, event.target.value.substr(idxNumberBegins), "fromCurrencyAmount", fromCurrencyAmount)
            // Number with decimal
            if (fromCurrencyAmount) {
                if (event.target.value.charAt(event.target.value.length - 1) !== '.'){
                    this.setState({
                        fromCurrencyAmount: fromCurrencyAmount,
                        fromCurrencyLabel: '$ ' + this.numberWithCommas(fromCurrencyAmount)
                    })
                } else {
                    this.setState({
                        fromCurrencyAmount: fromCurrencyAmount,
                        fromCurrencyLabel: event.target.value
                    })
                }
            } else {
                this.setState({
                    fromCurrencyAmount: 0,
                    fromCurrencyLabel: ''
                })
            }
        }
    }
    handleChangeToCurrency = (event) => {
        event.preventDefault()
    }
    numberWithCommas = (x) => {
        var arrWhole = x.toString().split(".");
        var arrTheNumber = arrWhole[0].split("").reverse();
        var newNum = Array();
        for(var i=0; i<arrTheNumber.length; i++){
            newNum[newNum.length] = ((i%3===2) && (i<arrTheNumber.length-1)) ? "," + arrTheNumber[i]: arrTheNumber[i];
        }
        var returnNum = newNum.reverse().join("");
        if(arrWhole[1]){
            returnNum += "." + arrWhole[1];
        }
        return returnNum;
    }
    render() {
        return(
            <CurrencyExchangeLayout
                handleChangeFromCurrency={this.handleChangeFromCurrency}
                handleChangeToCurrency={this.handleChangeToCurrency}
                setFromCurrencyRef={this.inputFromCurrency}
                setToCurrencyRef={this.inputToCurrency}
                fromAmount={this.state.fromCurrencyLabel}
                toAmount={this.state.toCurrencyLabel}
                handleSubmit={this.handleSubmit}/>
        )
    }

    componentDidMount(){
        console.log(this.numberWithCommas(1234354366.2143241))
    }
}

export default CurrencyExchange