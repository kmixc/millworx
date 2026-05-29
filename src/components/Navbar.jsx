import React, { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'

import logo from '../assets/millworx_logo.svg'

export default function Navbar() {
    const span1 = useRef(null)
    const span2 = useRef(null)
    const span3 = useRef(null)
    const mobileMenuRef = useRef(null)
    const mobileLinksRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const tlRef = useRef(null)

    useEffect(() => {
        const menu = mobileMenuRef.current
        const links = mobileLinksRef.current ? Array.from(mobileLinksRef.current.children) : []

        gsap.set(menu, { yPercent: -100, display: 'none' })
        gsap.set(links, { opacity: 0, y: 18 })

        const tl = gsap.timeline({ paused: true })

        tl.to(menu, {
            yPercent: 0,
            display: 'flex',
            duration: 0.45,
            ease: 'power3.out',
        })
        tl.to(links, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.07,
            ease: 'power2.out',
        }, '-=0.2')

        tlRef.current = tl

        return () => tl.kill()
    }, [])

    const animateBurger = useCallback((open) => {
        if (open) {
            gsap.to(span1.current, { rotation: 45, y: 6, duration: 0.3, ease: 'power2.inOut' })
            gsap.to(span2.current, { opacity: 0, scaleX: 0, duration: 0.2, ease: 'power2.in' })
            gsap.to(span3.current, { rotation: -45, y: -6, duration: 0.3, ease: 'power2.inOut' })
        } else {
            gsap.to(span1.current, { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' })
            gsap.to(span2.current, { opacity: 1, scaleX: 1, duration: 0.3, ease: 'power2.out' })
            gsap.to(span3.current, { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' })
        }
    }, [])

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => {
            const next = !prev
            animateBurger(next)
            if (next) {
                tlRef.current.play()
            } else {
                tlRef.current.reverse()
            }
            return next
        })
    }, [animateBurger])

    const closeMenu = useCallback(() => {
        if (!menuOpen) return
        setMenuOpen(false)
        animateBurger(false)
        tlRef.current.reverse()
    }, [menuOpen, animateBurger])

    return (
        <>
            <header className="nav-bar">
                <div className="nav-bar__inner">
                    <div className="nav-bar__utility nav-bar__utility--left">
                        <nav className="nav-bar__desktop-nav" aria-label="Main navigation left">
                            <ul className="nav__links">
                                <li><a href="/about" className="nav__link">About</a></li>
                                <li><a href="/services" className="nav__link">Services</a></li>
                            </ul>
                        </nav>
                    </div>

                    <a href="/" className="nav__logo nav__logo--center">
                        <img src={logo} alt="Millworx" />
                    </a>

                    <div className="nav-bar__utility nav-bar__utility--right">
                        <nav className="nav-bar__desktop-nav" aria-label="Main navigation right">
                            <ul className="nav__links">
                                <li><a href="/projects" className="nav__link">Projects</a></li>
                                <li><a href="/contact" className="nav__link">Contact</a></li>
                            </ul>
                        </nav>

                        <button
                            className="nav__burger"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            onClick={toggleMenu}
                        >
                            <span ref={span1}></span>
                            <span ref={span2}></span>
                            <span ref={span3}></span>
                        </button>
                    </div>
                </div>

                <div className="nav-bar__socials nav-bar__desktop-only">
                    <a href="https://www.instagram.com/millworx.ca/" target="_blank" rel="noopener" aria-label="Instagram" className="nav-topbar__item">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                    <a href="https://www.facebook.com/millworxcompany" target="_blank" rel="noopener" aria-label="Facebook" className="nav-topbar__item">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                    </a>
                </div>
            </header>

            <nav
                ref={mobileMenuRef}
                className="mobile-menu"
                aria-label="Mobile navigation"
                aria-hidden={!menuOpen}
            >
                <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close menu">
                    <span></span>
                    <span></span>
                </button>
                <a href="/" className="mobile-menu__logo" onClick={closeMenu}>
                    <img src={logo} alt="Millworx" />
                </a>
                <ul ref={mobileLinksRef} className="mobile-menu__links">
                    <li><a href="/about" className="mobile-menu__link" onClick={closeMenu}>About</a></li>
                    <li><a href="/services" className="mobile-menu__link" onClick={closeMenu}>Services</a></li>
                    <li><a href="/projects" className="mobile-menu__link" onClick={closeMenu}>Projects</a></li>
                    <li><a href="/contact" className="mobile-menu__link" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
