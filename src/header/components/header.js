import React from 'react'
import './header.css'
import MenuItem from "./menuItem"

const Header = (props) => (
    <section className="Header">
        <nav className="Header-Menu-List">
            <MenuItem name="Home"/>
            <MenuItem name="About us"/>
            <MenuItem name="Blog"/>
            <MenuItem name="Contact Us"/>
        </nav>
    </section>
)

export default Header