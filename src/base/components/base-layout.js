import React from 'react'
import Header from "../../header/components/header"

const BaseLayout = (props) => (
    <section>
        {props.children}
    </section>
)

export default BaseLayout