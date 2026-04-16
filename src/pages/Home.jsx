import React from 'react'

export default function Home() {
    return (
        <div>
            <section className="hero">
                <div className="hero__bg">
                    <div className="hero__video-wrap">
                        <iframe
                            src="https://player.vimeo.com/video/1150029951?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Millworx Project Showcase"
                            className="hero__video-iframe"
                        ></iframe>
                    </div>
                </div>
                <div className="hero__overlay"></div>

                <div className="hero__content">
                    <p className="label hero__label">Est. 2005 &nbsp;·&nbsp; Ontario, Canada</p>
                    <h1 className="hero__heading">Custom <em>European</em> Cabinetry</h1>
                    <p className="hero__sub">Designed &nbsp;·&nbsp; Manufactured &nbsp;·&nbsp; Installed</p>
                    <a href="#projects" className="btn btn--light">View Projects</a>
                </div>

                <div className="hero__scroll">
                    <span className="hero__scroll-text">Scroll</span>
                    <div className="hero__scroll-line"></div>
                </div>
            </section>

            <div className="marquee-strip" aria-hidden="true">
                <div className="marquee-strip__track">
                    <span className="marquee-strip__item">Custom Kitchens <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Wall Units <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Bathroom Vanities <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Home Offices <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Closets <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Commercial Spaces <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">European Cabinetry <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">In-House Design <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Custom Kitchens <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Wall Units <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Bathroom Vanities <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Home Offices <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Closets <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">Commercial Spaces <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">European Cabinetry <span className="marquee-strip__dot"></span></span>
                    <span className="marquee-strip__item">In-House Design <span className="marquee-strip__dot"></span></span>
                </div>
            </div>

            <section className="intro" id="about">
                <div className="container">
                    <div className="intro__grid">
                        <div className="intro__text reveal">
                            <p className="label">Our Philosophy</p>
                            <div className="divider"></div>
                            <h2 className="intro__heading">
                                Where <em>precision</em><br />meets beauty
                            </h2>
                            <p className="intro__body">
                                For nearly two decades, Millworx has been crafting custom European cabinetry for
                                discerning homeowners and commercial clients across Ontario. Our in-house team of
                                designers and skilled craftspeople collaborate on every project — from the first
                                sketch to the final installation.
                            </p>
                            <p className="intro__body">
                                We work exclusively with premium materials, state-of-the-art manufacturing equipment,
                                and a commitment to detail that elevates every space we touch.
                            </p>
                            <a href="#about" className="btn btn--dark">Our Story</a>

                            <div className="intro__stats">
                                <div>
                                    <div className="stat__number">2,043</div>
                                    <div className="stat__label">Projects Completed</div>
                                </div>
                                <div>
                                    <div className="stat__number">50+</div>
                                    <div className="stat__label">Professionals</div>
                                </div>
                                <div>
                                    <div className="stat__number">21</div>
                                    <div className="stat__label">Years of Excellence</div>
                                </div>
                            </div>
                        </div>

                        <div className="intro__image reveal reveal-delay-2">
                            <img
                                src="https://static.wixstatic.com/media/e4f8c2_916f6fba19aa4e7fb09aa14bbd8aed6e~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4f8c2_916f6fba19aa4e7fb09aa14bbd8aed6e~mv2.jpg"
                                alt="Custom cabinetry detail"
                            />
                            <div className="intro__image-tag">
                                <span>Residential Kitchen &nbsp;·&nbsp; Toronto</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="label">What We Do</p>
                        <h2 className="section-header__heading">A seamless process,<br /><em>from concept to completion</em></h2>
                    </div>

                    <div className="services__grid">
                        <div className="service-card reveal">
                            <div className="service-card__number">01</div>
                            <div className="service-card__icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="6" y="6" width="36" height="36" rx="1" />
                                    <line x1="14" y1="6" x2="14" y2="42" />
                                    <line x1="6" y1="18" x2="42" y2="18" />
                                    <circle cx="32" cy="30" r="5" />
                                    <line x1="35.5" y1="33.5" x2="40" y2="38" />
                                </svg>
                            </div>
                            <h3 className="service-card__title">Design</h3>
                            <p className="service-card__text">
                                Our in-house designers collaborate with you to craft a vision tailored to your space,
                                lifestyle, and taste. Every detail — considered.
                            </p>
                        </div>

                        <div className="service-card reveal reveal-delay-2">
                            <div className="service-card__number">02</div>
                            <div className="service-card__icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="8" y="20" width="32" height="22" rx="1" />
                                    <path d="M16 20V14a8 8 0 0116 0v6" />
                                    <line x1="24" y1="30" x2="24" y2="34" />
                                    <circle cx="24" cy="29" r="2" />
                                </svg>
                            </div>
                            <h3 className="service-card__title">Manufacture</h3>
                            <p className="service-card__text">
                                Fabricated in our Ontario facility using premium European hardware and
                                responsibly sourced hardwoods. Built to endure, built to impress.
                            </p>
                        </div>

                        <div className="service-card reveal reveal-delay-3">
                            <div className="service-card__number">03</div>
                            <div className="service-card__icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10 38V16l14-8 14 8v22" />
                                    <rect x="18" y="26" width="12" height="12" />
                                    <line x1="24" y1="8" x2="24" y2="14" />
                                    <line x1="10" y1="22" x2="38" y2="22" />
                                </svg>
                            </div>
                            <h3 className="service-card__title">Install</h3>
                            <p className="service-card__text">
                                Our licensed installation team delivers with precision and care — no contractors,
                                no shortcuts. We see every project through to a perfect finish.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects" id="projects">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="label">Portfolio</p>
                        <h2 className="section-header__heading"><em>Selected</em> projects</h2>
                    </div>

                    <div className="projects__grid">
                        <div className="project-card reveal">
                            <img className="project-card__img" src="https://static.wixstatic.com/media/e4f8c2_cb451f5a71c74353af70b0000da41c6e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/e4f8c2_cb451f5a71c74353af70b0000da41c6e~mv2.jpg" alt="Kitchen project" />
                            <div className="project-card__overlay">
                                <div className="project-card__info">
                                    <div className="project-card__category">Residential Kitchen</div>
                                    <div className="project-card__title">The Rosedale Residence</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal reveal-delay-1">
                            <img className="project-card__img" src="https://static.wixstatic.com/media/e4f8c2_9847fdb2ed37464eb25b5d600b31adb4~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4f8c2_9847fdb2ed37464eb25b5d600b31adb4~mv2.jpg" alt="Bathroom vanity" />
                            <div className="project-card__overlay">
                                <div className="project-card__info">
                                    <div className="project-card__category">Bathroom</div>
                                    <div className="project-card__title">Forest Hill Vanity Suite</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal reveal-delay-2">
                            <img className="project-card__img" src="https://static.wixstatic.com/media/e4f8c2_b4a8b6ca08b34867aa50b1e579168006~mv2.jpg/v1/fill/w_1200,h_1800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4f8c2_b4a8b6ca08b34867aa50b1e579168006~mv2.jpg" alt="Custom cabinetry" />
                            <div className="project-card__overlay">
                                <div className="project-card__info">
                                    <div className="project-card__category">Custom Cabinetry</div>
                                    <div className="project-card__title">Bridle Path Library</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal reveal-delay-1">
                            <img className="project-card__img" src="https://static.wixstatic.com/media/e4f8c2_fbc9358273104ce9b26ad8633377510e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/e4f8c2_fbc9358273104ce9b26ad8633377510e~mv2.jpg" alt="Minimalist kitchen" />
                            <div className="project-card__overlay">
                                <div className="project-card__info">
                                    <div className="project-card__category">Residential Kitchen</div>
                                    <div className="project-card__title">Yorkville Penthouse</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal reveal-delay-2">
                            <img className="project-card__img" src="https://static.wixstatic.com/media/e4f8c2_d759e95044df4926a5a3cd1340db36f4~mv2.jpg/v1/fill/w_1200,h_1600,al_c,q_85,enc_avif,quality_auto/e4f8c2_d759e95044df4926a5a3cd1340db36f4~mv2.jpg" alt="Modern kitchen island" />
                            <div className="project-card__overlay">
                                <div className="project-card__info">
                                    <div className="project-card__category">Residential Kitchen</div>
                                    <div className="project-card__title">The King West Loft</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal reveal-delay-3">
                            <img className="project-card__img" src="https://static.wixstatic.com/media/e4f8c2_a50b033c86af42e58267751836f32404~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4f8c2_a50b033c86af42e58267751836f32404~mv2.jpg" alt="Closet and wardrobe" />
                            <div className="project-card__overlay">
                                <div className="project-card__info">
                                    <div className="project-card__category">Walk-in Closet</div>
                                    <div className="project-card__title">Lawrence Park Dressing Room</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projects__cta reveal">
                        <a href="#" className="btn btn--dark">View All Projects</a>
                    </div>
                </div>
            </section>

            <section className="testimonial">
                <div className="container">
                    <div className="reveal">
                        <p className="label">Client Words</p>
                        <blockquote className="testimonial__quote">
                            "Millworx transformed our kitchen into something we never thought possible.
                            The craftsmanship is extraordinary — every detail speaks of genuine care."
                        </blockquote>
                        <div className="divider divider--center"></div>
                        <p className="testimonial__attribution">— Sarah & James K. &nbsp;·&nbsp; Rosedale, Toronto</p>
                    </div>
                </div>
            </section>

            <div className="full-bleed">
                <img className="full-bleed__img" src="https://static.wixstatic.com/media/e4f8c2_5ef20d8a393445da805c11607941e448~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4f8c2_5ef20d8a393445da805c11607941e448~mv2.jpeg" alt="Luxury interior" />
                <div className="full-bleed__overlay">
                    <div className="full-bleed__text">
                        When dreams<br /><em>are worth building</em>
                    </div>
                </div>
            </div>

            <section className="about-preview">
                <div className="about-preview__bg-text" aria-hidden="true">Millworx</div>
                <div className="container">
                    <div className="about-preview__content reveal">
                        <p className="about-preview__year">Est. 2005</p>
                        <div className="about-preview__divider"></div>
                        <h2 className="about-preview__heading">
                            Industry leaders in<br /><em>bespoke cabinetry</em>
                        </h2>
                        <p className="about-preview__body">
                            With over two thousand completed projects and a team of fifty dedicated professionals,
                            Millworx stands as one of Ontario's most trusted names in custom European cabinetry —
                            for both residential and commercial spaces.
                        </p>
                        <a href="#" className="btn btn--dark">Learn More About Us</a>

                        <div className="about-preview__stats">
                            <div className="about-stat">
                                <div className="about-stat__number">2,043</div>
                                <div className="about-stat__label">Projects Completed</div>
                            </div>
                            <div className="about-stat">
                                <div className="about-stat__number">50+</div>
                                <div className="about-stat__label">Skilled Professionals</div>
                            </div>
                            <div className="about-stat">
                                <div className="about-stat__number">21</div>
                                <div className="about-stat__label">Years in Business</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="process">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="label">How It Works</p>
                        <h2 className="section-header__heading">The Millworx <em>Process</em></h2>
                    </div>

                    <div className="process__grid">
                        <div className="process-step reveal">
                            <div className="process-step__num">01</div>
                            <h3 className="process-step__title">Consultation</h3>
                            <p className="process-step__text">
                                We begin with a detailed conversation about your space, lifestyle, and vision.
                                No project is too complex — our designers thrive on challenge.
                            </p>
                        </div>

                        <div className="process-step reveal reveal-delay-1">
                            <div className="process-step__num">02</div>
                            <h3 className="process-step__title">Design</h3>
                            <p className="process-step__text">
                                Our in-house design team produces detailed plans, 3D renderings, and material
                                samples — ensuring every decision is made with complete clarity.
                            </p>
                        </div>

                        <div className="process-step reveal reveal-delay-2">
                            <div className="process-step__num">03</div>
                            <h3 className="process-step__title">Fabrication</h3>
                            <p className="process-step__text">
                                Built in our Ontario facility with premium European hardware. Every component
                                is crafted and inspected to our exacting standards.
                            </p>
                        </div>

                        <div className="process-step reveal reveal-delay-3">
                            <div className="process-step__num">04</div>
                            <h3 className="process-step__title">Installation</h3>
                            <p className="process-step__text">
                                Our licensed installers handle delivery and fitting with exceptional care.
                                We leave no detail unfinished, no edge unpolished.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
