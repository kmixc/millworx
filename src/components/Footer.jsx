import React from 'react'

import logo from '../assets/millworx_logo.svg'

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer__top">
                    <div>
                        <div className="footer__logo"><img
                            src={logo}
                            alt="Millworx" /></div>
                        <p className="footer__tagline">
                            Custom European cabinetry,<br />designed and built in Ontario.
                        </p>
                    </div>

                    <div>
                        <div className="footer__col-title">Navigation</div>
                        <ul className="footer__links">
                            <li><a href="#" className="footer__link">Home</a></li>
                            <li><a href="#about" className="footer__link">About</a></li>
                            <li><a href="#services" className="footer__link">Services</a></li>
                            <li><a href="#projects" className="footer__link">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className="footer__col-title">Services</div>
                        <ul className="footer__links">
                            <li><a href="#" className="footer__link">Kitchen Cabinetry</a></li>
                            <li><a href="#" className="footer__link">Bathroom Vanities</a></li>
                            <li><a href="#" className="footer__link">Wall Units</a></li>
                            <li><a href="#" className="footer__link">Commercial Projects</a></li>
                            <li><a href="#" className="footer__link">Custom Millwork</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className="footer__col-title">Contact</div>
                        <p className="footer__contact-item">
                            6150 Ordan Dr<br />
                            Mississauga, ON L5T 2B3<br /><br />
                            <a href="tel:9056709001" className="footer__link">(905) 670-9001</a>
                        </p>
                        <div className="footer__col-title footer__col-title--sm">Hours</div>
                        <ul className="footer__links footer__hours">
                            <li><span>Mon – Thu</span><span>8 a.m. – 5 p.m.</span></li>
                            <li><span>Friday</span><span>8 a.m. – 3 p.m.</span></li>
                            <li><span>Sat – Sun</span><span>Closed</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">© 2024 Millworx. All rights reserved.</p>
                    <div className="footer__social">
                        <a href="https://www.instagram.com/millworx.ca/" className="footer__social-link">Instagram</a>
                        <a href="https://www.facebook.com/millworxcompany" className="footer__social-link">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
