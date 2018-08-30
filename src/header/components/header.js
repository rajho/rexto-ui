import React from 'react'
import './header.css'
import MenuItem from "./menuItem"

const Header = (props) => (
    <ul className="Header-Menu-List">
        <MenuItem name="Home"/>
        <MenuItem name="About us"/>
        <MenuItem name="Blog"/>
        <MenuItem name="Contact Us"/>
    </ul>
)

export default Header