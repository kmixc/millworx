import React from 'react'
import { Link } from 'react-router-dom'

const allImages = import.meta.glob('../assets/img/**/*.{jpg,jpeg,png}', { eager: true })

function resolveImage(folder, filename) {
    const key = `../assets/img/${folder}/${filename}`
    return allImages[key]?.default ?? ''
}

const SERVICES = [
    {
        num: '01',
        title: 'Kitchen Cabinetry',
        body: 'The kitchen is the heart of the home — and our most refined canvas. We design and build fully custom European kitchens that balance function with enduring elegance, tailored precisely to your space.',
        icon: (
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="10" width="36" height="28" rx="1" />
                <line x1="6" y1="22" x2="42" y2="22" />
                <line x1="24" y1="10" x2="24" y2="38" />
                <circle cx="15" cy="16" r="1.5" />
                <circle cx="33" cy="16" r="1.5" />
                <rect x="12" y="26" width="10" height="8" rx="0.5" />
            </svg>
        ),
        folder: 'caldwell', img: 'caldwell_1_f.jpg',
    },
    {
        num: '02',
        title: 'Bathroom Vanities',
        body: 'From spa-inspired master ensuites to sleek powder rooms, our vanities combine premium materials with precise joinery — creating a sense of calm luxury in every washroom.',
        icon: (
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="18" width="32" height="22" rx="1" />
                <path d="M16 18v-4a8 8 0 0116 0v4" />
                <line x1="18" y1="30" x2="30" y2="30" />
                <line x1="24" y1="26" x2="24" y2="34" />
            </svg>
        ),
        folder: 'dunloe', img: 'dunloe_1.jpg',
    },
    {
        num: '03',
        title: 'Wall Units & Built-Ins',
        body: 'Bespoke wall units, entertainment centres, and built-in shelving that transform blank walls into architectural statements — purpose-built to fit your room perfectly.',
        icon: (
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="8" width="36" height="32" rx="1" />
                <line x1="6" y1="20" x2="42" y2="20" />
                <line x1="6" y1="32" x2="42" y2="32" />
                <line x1="24" y1="8" x2="24" y2="40" />
            </svg>
        ),
        folder: 'castlefield', img: 'castlefield_1_f.jpg',
    },
    {
        num: '04',
        title: 'Home Offices',
        body: 'A dedicated workspace should inspire as much as it organises. We craft custom desks, cabinetry, and integrated storage that elevate the home office into a professional sanctuary.',
        icon: (
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="14" width="36" height="24" rx="1" />
                <line x1="6" y1="38" x2="42" y2="38" />
                <line x1="16" y1="38" x2="14" y2="43" />
                <line x1="32" y1="38" x2="34" y2="43" />
                <line x1="14" y1="25" x2="34" y2="25" />
                <line x1="14" y1="30" x2="26" y2="30" />
            </svg>
        ),
        folder: 'glen_road', img: 'glen_road_1_f.jpg',
    },
    {
        num: '05',
        title: 'Closets & Wardrobes',
        body: 'Custom walk-in wardrobes and reach-in closets engineered around your wardrobe. Every drawer, hanging rail, and shelf placed with intention.',
        icon: (
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="6" width="36" height="36" rx="1" />
                <line x1="24" y1="6" x2="24" y2="42" />
                <line x1="6" y1="18" x2="42" y2="18" />
                <circle cx="21" cy="12" r="1.5" />
                <circle cx="27" cy="12" r="1.5" />
            </svg>
        ),
        folder: 'glencairn', img: 'glencairn_1_f.jpg',
    },
    {
        num: '06',
        title: 'Commercial Millwork',
        body: 'Restaurants, hotels, offices, and retail — our commercial division delivers the same uncompromising craftsmanship at any scale. Trusted by brands including the Ritz-Carlton.',
        icon: (
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 38V16l14-8 14 8v22" />
                <rect x="18" y="26" width="12" height="12" />
                <line x1="24" y1="8" x2="24" y2="14" />
                <line x1="10" y1="22" x2="38" y2="22" />
            </svg>
        ),
        folder: 'jarvis', img: 'jarvis_1_f.jpg',
    },
]

const PROCESS_STEPS = [
    { num: '01', title: 'Consultation', text: 'We begin with a thorough conversation about your space, needs, and vision — at our showroom or on-site. No project is too ambitious.' },
    { num: '02', title: 'Design', text: 'Our in-house designers produce detailed plans and 3D renderings so every decision is made with complete clarity before production begins.' },
    { num: '03', title: 'Fabrication', text: 'Built in our Mississauga facility using premium European hardware and responsibly sourced materials. Each component is inspected to our exact standards.' },
    { num: '04', title: 'Installation', text: 'Our licensed team delivers and installs with exceptional care. No subcontractors — we see every project through to a flawless finish.' },
]

export default function Services() {
    const heroSrc = resolveImage('glencairn', 'glencairn_1_f.jpg')
    const bleedSrc = resolveImage('ritz_carlton', 'ritz_carlton_1.jpg')

    return (
        <div>
            {/* ── Page Hero ── */}
            <section className="page-hero">
                <div className="page-hero__bg" style={{ backgroundImage: `url(${heroSrc})` }}></div>
                <div className="hero__overlay"></div>
                <div className="page-hero__content">
                    <p className="label hero__label">What We Do</p>
                    <h1 className="hero__heading">Our <em>Services</em></h1>
                    <p className="hero__sub">Design &nbsp;·&nbsp; Manufacture &nbsp;·&nbsp; Install</p>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="svc-intro">
                <div className="container svc-intro__inner reveal">
                    <div className="svc-intro__text">
                        <p className="label">A Complete Service</p>
                        <div className="divider"></div>
                        <h2 className="section-heading">
                            Every project, <em>in-house</em><br />from start to finish
                        </h2>
                    </div>
                    <p className="svc-intro__body">
                        Unlike other cabinetry companies, Millworx controls every stage of your project —
                        design, fabrication, and installation — under one roof. That means tighter quality
                        control, cleaner communication, and results that speak for themselves.
                    </p>
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section className="svc-grid-section">
                <div className="container">
                    <div className="svc-grid">
                        {SERVICES.map((s) => {
                            const imgSrc = resolveImage(s.folder, s.img)
                            return (
                                <div key={s.num} className="svc-item reveal">
                                    <div className="svc-item__image">
                                        <img src={imgSrc} alt={s.title} />
                                    </div>
                                    <div className="svc-item__body">
                                        <div className="svc-item__num">{s.num}</div>
                                        <div className="svc-item__icon">{s.icon}</div>
                                        <h3 className="svc-item__title">{s.title}</h3>
                                        <p className="svc-item__text">{s.body}</p>
                                        <Link to="/projects" className="svc-item__link">
                                            View related work &rarr;
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Full-bleed ── */}
            <div className="full-bleed">
                <img className="full-bleed__img" src={bleedSrc} alt="Ritz-Carlton commercial millwork" />
                <div className="full-bleed__overlay">
                    <div className="full-bleed__text">
                        Built to the <em>highest standard</em>
                    </div>
                </div>
            </div>

            {/* ── Process ── */}
            <section className="process">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="label">How It Works</p>
                        <h2 className="section-header__heading">The Millworx <em>Process</em></h2>
                    </div>
                    <div className="process__grid">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={step.num} className={`process-step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                                <div className="process-step__num">{step.num}</div>
                                <h3 className="process-step__title">{step.title}</h3>
                                <p className="process-step__text">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Materials callout ── */}
            <section className="svc-materials">
                <div className="container svc-materials__inner">
                    <div className="svc-materials__text reveal">
                        <p className="label">Our Materials</p>
                        <div className="divider"></div>
                        <h2 className="section-heading">Premium materials,<br /><em>responsibly sourced</em></h2>
                        <p className="svc-materials__body">
                            We work exclusively with European-grade hardware — Blum hinges, Häfele systems,
                            and precision-milled cabinet boxes — paired with solid hardwoods, veneers,
                            lacquers, and stone surfaces selected for their beauty and durability.
                        </p>
                        <p className="svc-materials__body">
                            Our relationships with suppliers mean access to finishes and materials unavailable
                            off the shelf — giving your project a character that is entirely its own.
                        </p>
                    </div>
                    <div className="svc-materials__badges reveal">
                        {['Blum Hardware', 'Häfele Systems', 'Solid Hardwood', 'European Veneer', 'Lacquer Finish', 'Natural Stone'].map((m) => (
                            <div key={m} className="svc-badge">{m}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="about-cta">
                <div className="container about-cta__inner reveal">
                    <h2 className="about-cta__heading">Ready to discuss your <em>project</em>?</h2>
                    <Link to="/contact" className="btn btn--light">Get in Touch</Link>
                </div>
            </section>
        </div>
    )
}

