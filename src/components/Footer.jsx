import React from 'react'

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer__top">
                    <div>
                        <div className="footer__logo"><img
                            src="https://static.wixstatic.com/media/e4f8c2_5885afc525ad4ec6bc1a2484d8f0e5dd~mv2.png/v1/crop/x_0,y_359,w_1080,h_318/fill/w_319,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Millworx%20IG%2BFB%20(20).png"
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
                            Ontario, Canada<br />
                            Greater Toronto Area<br /><br />
                            (416) 555-0180<br />
                            info@millworx.ca
                        </p>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">© 2024 Millworx. All rights reserved.</p>
                    <div className="footer__social">
                        <a href="#" className="footer__social-link">Instagram</a>
                        <a href="#" className="footer__social-link">Facebook</a>
                        <a href="#" className="footer__social-link">Houzz</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
