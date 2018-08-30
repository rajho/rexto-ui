import React from 'react'
import './footer.css'

const Footer = (props) => (
    <section className="Footer">
        <div className="Footer-column">
            <div className="Footer-title">
                About us
            </div>
            <div className="Footer-list-content">
                <ul>
                    <li>About us</li>
                </ul>
            </div>
        </div>
        <div className="Footer-column">
            <div className="Footer-title">
                Services
            </div>
            <div className="Footer-list-content">
                <ul>
                    <li>USD exchange</li>
                    <li>App iOS</li>
                    <li>App Android</li>
                </ul>
            </div>
        </div>
        <div className="Footer-column">
            <div className="Footer-title">
                Resources
            </div>
            <div className="Footer-list-content">
                <ul>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Media</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li><img
                            src="https://image.flaticon.com/icons/svg/25/25303.svg"
                            alt="claiming-book"
                            width={24}
                            height={24} className="Footer-claiming-icon"/>
                        Claiming Center
                    </li>
                </ul>
            </div>
        </div>
        <div className="Footer-column">
            <div className="Footer-title">
                Contact
            </div>
            <div className="Footer-list-content contact">
                <ul>
                    <li>contact@moneyxchange.com</li>
                    <li>(555) 546 5678</li>
                    <li> 999 999 999</li>
                    <li> Av. Money Vault 123, USA</li>
                </ul>
            </div>
        </div>
    </section>
)

export default Footer