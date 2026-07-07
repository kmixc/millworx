import React from 'react'
// CSS_IMPORT_DISABLED

const allImages = import.meta.glob('../assets/img/**/*.{jpg,jpeg,png}', { eager: true })

function resolveImage(folder, filename) {
    const key = `../assets/img/${folder}/${filename}`
    return allImages[key]?.default ?? ''
}

// ─── STORY CONTENT ────────────────────────────────────────────────────────────
// Replace the placeholder strings below with the real company story once received.

const STORY_CHAPTER_2 = {
    label: 'The Craft',
    heading: <>A commitment to excellence</>,
    body: [
        'At Millworx, our craft is built on precision, discipline, and continuous refinement. Over time, our process has evolved through experience and a commitment to doing things properly from first concept to final installation.',
        'Our work is shaped by a skilled team, a dedicated facility, and a strong European influence in both design and fabrication. Every detail is considered, and every project is held to a consistent standard of quality.',
        'Millworx is defined by both tradition and progress. While we stay true to our core standards of quality and craftsmanship, we continue to evolve with new design trends, techniques, and technologies to better serve our clients.',
    ],
}

// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
    const heroSrc = resolveImage('jarvis', 'jarvis_1_f.jpg')
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
                    <h1 className="hero__heading">Who We Are</h1>
                    <p className="hero__sub">Craftsmanship &nbsp;·&nbsp; Heritage &nbsp;·&nbsp; Vision</p>
                </div>
            </section>

            {/* ── Opening Statement ── */}
            <section className="about-opening">
                <div className="container about-opening__inner reveal">
                    <div className="about-opening__bg-text" aria-hidden="true">Millworx</div>
                    <div className="divider"></div>
                    <h2 className="about-opening__heading">
                        Two decades of precision,<br />built into every detail
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

            {/* ── Full-bleed Image ── */}
            <div className="about-pull-quote">
                <div className="about-pull-quote__bg" style={{ backgroundImage: `url(${img2Src})` }}></div>
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

        </div>
    )
}

