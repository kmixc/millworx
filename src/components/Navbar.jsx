import React, { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'

import logo from '../assets/millworx_logo.svg'

export default function Navbar() {
    const topbarRef = useRef(null)
    const logoRowRef = useRef(null)
    const linksRowRef = useRef(null)
    const burgerRef = useRef(null)
    const span1 = useRef(null)
    const span2 = useRef(null)
    const span3 = useRef(null)
    const mobileMenuRef = useRef(null)
    const mobileLinksRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const tlRef = useRef(null)

    // Build GSAP timeline once on mount
    useEffect(() => {
        const menu = mobileMenuRef.current
        const links = mobileLinksRef.current ? Array.from(mobileLinksRef.current.children) : []

        // Set initial states
        gsap.set(menu, { yPercent: -100, display: 'none' })
        gsap.set(links, { opacity: 0, y: 18 })

        const tl = gsap.timeline({ paused: true })

        // Menu slides down
        tl.to(menu, {
            yPercent: 0,
            display: 'flex',
            duration: 0.45,
            ease: 'power3.out',
        })
        // Links stagger in
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

    // Burger morph animation
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

    // Scroll handling
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
            {/* Top info bar */}
            <div className="nav-topbar" ref={topbarRef}>
                {/* Left: phone (desktop also shows address) */}
                <div className="nav-topbar__left">
                    <a href="tel:9056709001" className="nav-topbar__item">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006.91 6.91l1.18-1.16a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                        (905) 670-9001
                    </a>
                    <div className="nav-topbar__divider nav-topbar__item--desktop-only"></div>
                    <a href="https://www.google.com/maps/search/6150+Ordan+Dr,+Mississauga,+ON+L5T+2B3" target="_blank" rel="noopener" className="nav-topbar__item nav-topbar__item--desktop-only">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        6150 Ordan Dr, Mississauga
                    </a>
                </div>

                {/* Mobile-only separators + centred Instagram */}
                <div className="nav-topbar__divider nav-topbar__item--mobile-only"></div>
                <a href="https://www.instagram.com/millworx.ca/" target="_blank" rel="noopener" className="nav-topbar__item nav-topbar__item--mobile-only">
                    <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    Instagram
                </a>
                <div className="nav-topbar__divider nav-topbar__item--mobile-only"></div>

                {/* Right: Instagram + Facebook on desktop; address on mobile */}
                <div className="nav-topbar__right">
                    <a href="https://www.instagram.com/millworx.ca/" target="_blank" rel="noopener" className="nav-topbar__item nav-topbar__item--desktop-only">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        Instagram
                    </a>
                    <div className="nav-topbar__divider nav-topbar__item--desktop-only"></div>
                    <a href="https://www.facebook.com/millworxcompany" target="_blank" rel="noopener" className="nav-topbar__item nav-topbar__item--desktop-only">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                        Facebook
                    </a>
                    {/* Mobile only: Address on right */}
                    <a href="https://www.google.com/maps/search/6150+Ordan+Dr,+Mississauga,+ON+L5T+2B3" target="_blank" rel="noopener" className="nav-topbar__item nav-topbar__item--mobile-only">
                        <svg className="nav-topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        6150 Ordan Dr
                    </a>
                </div>
            </div>

            <div className="nav-logo-row" ref={logoRowRef}>
                <a href="#" className="nav__logo">
                    <img src={logo} alt="Millworx" />
                </a>
                <button
                    ref={burgerRef}
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

            {/* Desktop split nav */}
            <nav className="nav-links-row" ref={linksRowRef} aria-label="Main navigation">
                <div className="nav__split">
                    <ul className="nav__links nav__links--left">
                        <li><a href="#about" className="nav__link">About</a></li>
                        <li><a href="#services" className="nav__link">Services</a></li>
                    </ul>

                    <a href="#" className="nav__logo nav__logo--inline">
                        <img src={logo} alt="Millworx" />
                    </a>

                    <ul className="nav__links nav__links--right">
                        <li><a href="/projects" className="nav__link">Projects</a></li>
                        <li><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile fullscreen menu */}
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
                <ul ref={mobileLinksRef} className="mobile-menu__links">
                    <li><a href="#about" className="mobile-menu__link" onClick={closeMenu}>About</a></li>
                    <li><a href="#services" className="mobile-menu__link" onClick={closeMenu}>Services</a></li>
                    <li><a href="/projects" className="mobile-menu__link" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" className="mobile-menu__link" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
