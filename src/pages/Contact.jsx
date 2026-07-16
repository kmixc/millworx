import React, { useState } from 'react'
// CSS_IMPORT_DISABLED

const allImages = import.meta.glob('../assets/img/**/*.{jpg,jpeg,png}', { eager: true })

function resolveImage(folder, filename) {
    const key = `../assets/img/${folder}/${filename}`
    return allImages[key]?.default ?? ''
}

export default function Contact() {
    const [status, setStatus] = useState('idle') // idle | submitting | success | error
    const heroSrc = resolveImage('dunloe', 'dunloe_1.jpg')

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        const form = e.target
        const data = new FormData(form)

        try {
            const res = await fetch('https://formspree.io/f/mpqggwpd', {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            })
            if (res.ok) {
                setStatus('success')
                form.reset()
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div>
            {/* ── Page Hero ── */}
            <section className="page-hero">
                <div className="page-hero__bg" style={{ backgroundImage: `url(${heroSrc})` }}></div>
                <div className="hero__overlay"></div>
                <div className="page-hero__content">
                    <h1 className="hero__heading">Let's Connect</h1>
                    <p className="hero__sub">Residential &nbsp;·&nbsp; Commercial &nbsp;·&nbsp; Custom</p>
                </div>
            </section>

            {/* ── Contact Body ── */}
            <section className="contact-section">
                <div className="container contact-section__grid">

                    {/* Info Column */}
                    <div className="contact-info reveal">
                        <h2 className="section-heading">
                            Start your project
                        </h2>
                        <p className="contact-info__body">
                            Whether you know exactly what you want or you're just getting started, we're happy to talk it through.
                            Fill out the form and we'll get back to you within one business day.
                        </p>

                        <ul className="contact-detail-list">
                            <li className="contact-detail-list__item">
                                <span className="contact-detail-list__label">Address</span>
                                <span className="contact-detail-list__value">
                                    6150 Ordan Dr<br />Mississauga, ON L5T 2B3
                                </span>
                            </li>
                            <li className="contact-detail-list__item">
                                <span className="contact-detail-list__label">Phone</span>
                                <a
                                    href="tel:9056709001"
                                    className="contact-detail-list__value contact-detail-list__link"
                                >
                                    (905) 670-9001
                                </a>
                            </li>
                            <li className="contact-detail-list__item">
                                <span className="contact-detail-list__label">Email</span>
                                <a
                                    href="mailto:info@millworx.ca"
                                    className="contact-detail-list__value contact-detail-list__link"
                                >
                                    info@millworx.ca
                                </a>
                            </li>
                            <li className="contact-detail-list__item">
                                <span className="contact-detail-list__label">Hours</span>
                                <span className="contact-detail-list__value">
                                    Mon – Thu: &nbsp;8am – 5pm<br />
                                    Friday: &nbsp;8am – 3pm<br />
                                    Sat – Sun: &nbsp;Closed
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Form Column */}
                    <div className="contact-form-wrap reveal">
                        {status === 'success' ? (
                            <div className="contact-success">
                                <div className="divider divider--center"></div>
                                <h3 className="contact-success__heading">Message Received</h3>
                                <p className="contact-success__body">
                                    Thank you for reaching out. A member of our team will be in touch shortly.
                                </p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <label className="contact-form__label" htmlFor="firstName">First Name</label>
                                        <input
                                            className="contact-form__input"
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            autoComplete="given-name"
                                        />
                                    </div>
                                    <div className="contact-form__field">
                                        <label className="contact-form__label" htmlFor="lastName">Last Name</label>
                                        <input
                                            className="contact-form__input"
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            autoComplete="family-name"
                                        />
                                    </div>
                                </div>

                                <div className="contact-form__field">
                                    <label className="contact-form__label" htmlFor="email">Email Address</label>
                                    <input
                                        className="contact-form__input"
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="contact-form__field">
                                    <label className="contact-form__label" htmlFor="phone">Phone (optional)</label>
                                    <input
                                        className="contact-form__input"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        autoComplete="tel"
                                    />
                                </div>

                                <div className="contact-form__field">
                                    <label className="contact-form__label" htmlFor="projectType">Project Type</label>
                                    <select className="contact-form__input contact-form__select" id="projectType" name="projectType">
                                        <option value="">Select one…</option>
                                        <option>Kitchen Cabinetry</option>
                                        <option>Bathroom Vanities</option>
                                        <option>Wall Units</option>
                                        <option>Home Office</option>
                                        <option>Closets</option>
                                        <option>Commercial</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="contact-form__field">
                                    <label className="contact-form__label" htmlFor="message">Message</label>
                                    <textarea
                                        className="contact-form__input contact-form__textarea"
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="contact-form__error">
                                        Something went wrong. Please try again or call us directly.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn--dark contact-form__submit"
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

