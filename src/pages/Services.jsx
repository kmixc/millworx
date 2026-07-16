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
    },
    {
        num: '02',
        title: 'Bathroom Vanities',
        body: 'From spa-inspired master ensuites to sleek powder rooms, our vanities combine premium materials with precise joinery — creating a sense of calm luxury in every washroom.',
    },
    {
        num: '03',
        title: 'Wall Units & Built-Ins',
        body: 'Bespoke wall units, entertainment centres, and built-in shelving that transform blank walls into architectural statements — purpose-built to fit your room perfectly.',
    },
    {
        num: '04',
        title: 'Home Offices',
        body: 'A dedicated workspace should inspire as much as it organises. We craft custom desks, cabinetry, and integrated storage that elevate the home office into a professional sanctuary.',
    },
    {
        num: '05',
        title: 'Closets & Wardrobes',
        body: 'Custom walk-in wardrobes and reach-in closets engineered around your wardrobe. Every drawer, hanging rail, and shelf placed with intention.',
    },
    {
        num: '06',
        title: 'Commercial Millwork',
        body: 'Restaurants, hotels, offices, and retail — our commercial division delivers the same uncompromising craftsmanship at any scale. Trusted by brands including the Ritz-Carlton.',
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
                    <h1 className="hero__heading">Our Services</h1>
                    <p className="hero__sub">Design &nbsp;·&nbsp; Manufacture &nbsp;·&nbsp; Install</p>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="svc-intro">
                <div className="container svc-intro__inner reveal">
                    <div className="svc-intro__text">
                        <h2 className="section-heading">
                            Every project, in-house<br />from start to finish
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
                            return (
                                <div key={s.num} className="svc-item reveal">
                                    <div className="svc-item__body">
                                        <h3 className="svc-item__title">{s.title}</h3>
                                        <p className="svc-item__text">{s.body}</p>
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
                        Built to the highest standard
                    </div>
                </div>
            </div>

            {/* ── Process ── */}
            <section className="process">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="label">How It Works</p>
                        <h2 className="section-header__heading">The Millworx Process</h2>
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

        </div>
    )
}

