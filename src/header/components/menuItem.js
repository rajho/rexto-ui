import React from 'react'
import './menuItem.css'

const MenuItem = (props) => (
    <a className="Menu-Item" href="#">
        {props.name}
    </a>
)

export default MenuItem