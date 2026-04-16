import React, { useEffect, useRef } from 'react'

export default function Navbar() {
    const topbarRef = useRef(null)
    const logoRowRef = useRef(null)
    const linksRowRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 80
            topbarRef.current?.classList.toggle('nav-topbar--scrolled', scrolled)
            logoRowRef.current?.classList.toggle('nav-logo-row--scrolled', scrolled)
            linksRowRef.current?.classList.toggle('nav-links-row--scrolled', scrolled)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <div className="nav-topbar" ref={topbarRef}>
                <div className="nav-topbar__left">
                    <a href="tel:9056709001" className="nav-topbar__item">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006.91 6.91l1.18-1.16a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                        (905) 670-9001
                    </a>
                    <div className="nav-topbar__divider"></div>
                    <a href="https://www.google.com/maps/search/6150+Ordan+Dr,+Mississauga,+ON+L5T+2B3" target="_blank" rel="noopener" className="nav-topbar__item">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        6150 Ordan Dr, Mississauga
                    </a>
                </div>
                <div className="nav-topbar__right">
                    <a href="https://www.instagram.com/millworx/" target="_blank" rel="noopener" className="nav-topbar__item">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        Instagram
                    </a>
                    <div className="nav-topbar__divider"></div>
                    <a href="https://www.facebook.com/millworxcompany" target="_blank" rel="noopener" className="nav-topbar__item">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                        Facebook
                    </a>
                </div>
            </div>

            <div className="nav-logo-row" ref={logoRowRef}>
                <a href="#" className="nav__logo">
                    <img src="https://static.wixstatic.com/media/e4f8c2_5885afc525ad4ec6bc1a2484d8f0e5dd~mv2.png/v1/crop/x_0,y_359,w_1080,h_318/fill/w_319,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Millworx%20IG%2BFB%20(20).png" alt="Millworx" />
                </a>
                <button className="nav__burger" aria-label="Open menu">
                    <span></span><span></span><span></span>
                </button>
            </div>

            <nav className="nav-links-row" ref={linksRowRef} aria-label="Main navigation">
                <div className="nav__split">
                    <ul className="nav__links nav__links--left">
                        <li><a href="#about" className="nav__link">About</a></li>
                        <li><a href="#services" className="nav__link">Services</a></li>
                    </ul>

                    <a href="#" className="nav__logo nav__logo--inline">
                        <img src="https://static.wixstatic.com/media/e4f8c2_5885afc525ad4ec6bc1a2484d8f0e5dd~mv2.png/v1/crop/x_0,y_359,w_1080,h_318/fill/w_319,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Millworx%20IG%2BFB%20(20).png" alt="Millworx" />
                    </a>

                    <ul className="nav__links nav__links--right">
                        <li><a href="#projects" className="nav__link">Projects</a></li>
                        <li><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
