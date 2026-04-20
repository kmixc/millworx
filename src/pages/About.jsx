import React from 'react'
import { Link } from 'react-router-dom'

const allImages = import.meta.glob('../assets/img/**/*.{jpg,jpeg,png}', { eager: true })

function resolveImage(folder, filename) {
    const key = `../assets/img/${folder}/${filename}`
    return allImages[key]?.default ?? ''
}

// ─── STORY CONTENT ────────────────────────────────────────────────────────────
// Replace the placeholder strings below with the real company story once received.

const STORY_CHAPTER_1 = {
    label: 'The Beginning',
    heading: <>How it all <em>started</em></>,
    // TODO: Replace with actual founding story paragraph(s)
    body: [
        'Placeholder — insert the founding story here. Describe where, when, and why Millworx was started.',
        'Placeholder — second paragraph of the founding story.',
    ],
}

const STORY_CHAPTER_2 = {
    label: 'The Craft',
    heading: <>A commitment to <em>excellence</em></>,
    // TODO: Replace with the story of how the craft/process evolved
    body: [
        'Placeholder — describe how the craft and process developed over the years.',
        'Placeholder — talk about the people, the facility, and the European influence.',
    ],
}

const STORY_CHAPTER_3 = {
    label: 'Today',
    heading: <>Building the <em>future</em></>,
    // TODO: Replace with where the company is heading
    body: [
        'Placeholder — describe where Millworx stands today and what drives the team forward.',
    ],
}
// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
    const heroSrc = resolveImage('jarvis', 'jarvis_1_f.jpg')
    const img1Src = resolveImage('caldwell', 'caldwell_1_f.jpg')
    const img2Src = resolveImage('glen_road', 'glen_road_1_f.jpg')
    const img3Src = resolveImage('castlefield', 'castlefield_1_f.jpg')

    return (
        <div>
            {/* ── Page Hero ── */}
            <section className="page-hero">
                <div className="page-hero__bg" style={{ backgroundImage: `url(${heroSrc})` }}></div>
                <div className="hero__overlay"></div>
                <div className="page-hero__content">
                    <p className="label hero__label">Est. 2005 &nbsp;·&nbsp; Ontario, Canada</p>
                    <h1 className="hero__heading">Our <em>Story</em></h1>
                    <p className="hero__sub">Craftsmanship &nbsp;·&nbsp; Heritage &nbsp;·&nbsp; Vision</p>
                </div>
            </section>

            {/* ── Opening Statement ── */}
            <section className="about-opening">
                <div className="container about-opening__inner reveal">
                    <div className="about-opening__bg-text" aria-hidden="true">Millworx</div>
                    <p className="label">Who We Are</p>
                    <div className="divider"></div>
                    <h2 className="about-opening__heading">
                        Two decades of <em>precision</em>,<br />built into every detail
                    </h2>
                    <p className="about-opening__intro">
                        From a single workshop in Mississauga to one of Ontario's most trusted names in custom
                        European cabinetry — the Millworx story is one of craft, dedication, and an unrelenting
                        pursuit of the extraordinary.
                    </p>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <div className="about-stats-bar">
                <div className="container about-stats-bar__grid">
                    <div className="about-stats-bar__item">
                        <span className="about-stats-bar__number">2,043</span>
                        <span className="about-stats-bar__label">Projects Completed</span>
                    </div>
                    <div className="about-stats-bar__item">
                        <span className="about-stats-bar__number">50+</span>
                        <span className="about-stats-bar__label">Skilled Professionals</span>
                    </div>
                    <div className="about-stats-bar__item">
                        <span className="about-stats-bar__number">21</span>
                        <span className="about-stats-bar__label">Years in Business</span>
                    </div>
                    <div className="about-stats-bar__item">
                        <span className="about-stats-bar__number">100%</span>
                        <span className="about-stats-bar__label">In-House Process</span>
                    </div>
                </div>
            </div>

            {/* ── Story Chapter 1 ── */}
            <section className="about-chapter">
                <div className="container about-chapter__grid">
                    <div className="about-chapter__image reveal">
                        <img src={img1Src} alt="Millworx workshop — the early years" />
                    </div>
                    <div className="about-chapter__text reveal">
                        <p className="label">{STORY_CHAPTER_1.label}</p>
                        <div className="divider"></div>
                        <h2 className="section-heading">{STORY_CHAPTER_1.heading}</h2>
                        {STORY_CHAPTER_1.body.map((p, i) => (
                            <p key={i} className="about-chapter__body">{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Full-bleed Pull Quote ── */}
            <div className="about-pull-quote">
                <div className="about-pull-quote__bg" style={{ backgroundImage: `url(${img2Src})` }}></div>
                <div className="hero__overlay"></div>
                <div className="container about-pull-quote__inner reveal">
                    {/* TODO: Replace with a real founder quote */}
                    <p className="about-pull-quote__mark">&ldquo;</p>
                    <blockquote className="about-pull-quote__text">
                        Placeholder — insert a meaningful founder or values quote here.
                    </blockquote>
                    <p className="about-pull-quote__attribution">— Founder Name &nbsp;·&nbsp; Millworx</p>
                </div>
            </div>

            {/* ── Story Chapter 2 ── */}
            <section className="about-chapter about-chapter--reverse">
                <div className="container about-chapter__grid">
                    <div className="about-chapter__text reveal">
                        <p className="label">{STORY_CHAPTER_2.label}</p>
                        <div className="divider"></div>
                        <h2 className="section-heading">{STORY_CHAPTER_2.heading}</h2>
                        {STORY_CHAPTER_2.body.map((p, i) => (
                            <p key={i} className="about-chapter__body">{p}</p>
                        ))}
                    </div>
                    <div className="about-chapter__image reveal">
                        <img src={img3Src} alt="Millworx craftsmanship detail" />
                    </div>
                </div>
            </section>

            {/* ── Story Chapter 3 ── */}
            <section className="about-chapter" style={{ background: 'var(--color-cream)' }}>
                <div className="container about-chapter__grid">
                    <div className="about-chapter__image reveal">
                        <img src={heroSrc} alt="Millworx today" />
                    </div>
                    <div className="about-chapter__text reveal">
                        <p className="label">{STORY_CHAPTER_3.label}</p>
                        <div className="divider"></div>
                        <h2 className="section-heading">{STORY_CHAPTER_3.heading}</h2>
                        {STORY_CHAPTER_3.body.map((p, i) => (
                            <p key={i} className="about-chapter__body">{p}</p>
                        ))}
                        <Link to="/contact" className="btn btn--dark">Start a Project</Link>
                    </div>
                </div>
            </section>

            {/* ── Values ── */}
            <section className="about-values">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="label">What Drives Us</p>
                        <div className="divider"></div>
                        <h2 className="section-heading">Our <em>values</em></h2>
                    </div>
                    <div className="about-values__grid">
                        {[
                            { num: '01', title: 'Precision', body: 'Every measurement, every joint, every finish is held to a standard that leaves no room for compromise.' },
                            { num: '02', title: 'Integrity', body: 'We are transparent in our process, honest in our timelines, and accountable to every client we serve.' },
                            { num: '03', title: 'Innovation', body: 'European design principles meet the latest manufacturing technology — creating work that is both timeless and current.' },
                            { num: '04', title: 'Partnership', body: 'We treat every project as a collaboration. Your vision, our expertise — together we build something remarkable.' },
                        ].map((v) => (
                            <div key={v.num} className="about-value reveal">
                                <div className="about-value__num">{v.num}</div>
                                <h3 className="about-value__title">{v.title}</h3>
                                <p className="about-value__body">{v.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Strip ── */}
            <section className="about-cta">
                <div className="container about-cta__inner reveal">
                    <h2 className="about-cta__heading">Ready to begin your <em>project</em>?</h2>
                    <Link to="/contact" className="btn btn--light">Get in Touch</Link>
                </div>
            </section>
        </div>
    )
}

