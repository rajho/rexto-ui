import React, {Component} from 'react'
import BaseLayout from '../components/base-layout'
import CurrencyExchange from "../../main/containers/currency-exchange"
import Header from "../../header/components/header"
import Footer from "../../footer/components/footer"

class Base extends Component {
    render() {
        return (
            <BaseLayout>
                <Header />
                <CurrencyExchange />
                <Footer/>
            </BaseLayout>
        )
    }
}

export default Base