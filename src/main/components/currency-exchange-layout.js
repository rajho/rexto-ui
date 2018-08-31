import React from 'react'
import './currency-exchange-layout.css'

const CurrencyExchangeLayout = (props) => (
    <section className="Currency-Exchange">
        <h3>The Best Exchange Rate</h3>
        <form
            className="Currency-Exchange-form"
            onSubmit={props.handleSubmit}>

            <div className="Currency-Exchange-input-container">
                <input
                    ref={props.setFromCurrencyRef}
                    className="Currency-Exchange-input"
                    type="text"
                    onChange={props.handleChangeFromCurrency}
                    placeholder="USD"
                    value={props.fromAmount}/>
                <input
                    ref={props.setToCurrencyRef}
                    className="Currency-Exchange-input"
                    type="text"
                    onChange={props.handleChangeToCurrency}
                    placeholder="EU"
                    value={props.toAmount} disabled/>
            </div>
            <input
                type="submit"
                className="Currency-Exchange-button"
                value="CALCULATE">
            </input>
        </form>
    </section>
)

export default CurrencyExchangeLayout