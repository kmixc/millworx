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
                        <div className="footer__col-title">Contact</div>
                        <p className="footer__contact-item">
                            <a href="https://www.google.com/maps/search/?api=1&query=6150+Ordan+Dr+Mississauga+ON+L5T+2B3" target="_blank" rel="noopener noreferrer" className="footer__link">
                                6150 Ordan Dr<br />
                                Mississauga, ON L5T 2B3
                            </a><br /><br />
                            <a href="tel:9056709001" className="footer__link">(905) 670-9001</a>
                        </p>
                    </div>

                    <div>
                        <div className="footer__col-title">Hours</div>
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
