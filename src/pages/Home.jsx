import heroPoster from '../assets/img/dunloe/dunloe_1.jpg'
import heroVideo from '../assets/website_video_2026.mp4'

export default function Home() {

    return (
        <div style={{ height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <section className="hero" style={{ flex: 1, minHeight: 0 }}>
                <div className="hero__bg" style={{ backgroundImage: `url(${heroPoster})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
                    <div className="hero__video-wrap">
                        <video
                            className="hero__video-iframe"
                            src={heroVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>
                <div className="hero__overlay"></div>

                <div className="hero__content">
                    <p className="label hero__label">Est. 2005 &nbsp;·&nbsp; Ontario, Canada</p>
                    <h1 className="hero__heading">Bespoke Cabinetry & Interiors</h1>
                    <p className="hero__sub">Designed &nbsp;·&nbsp; Manufactured &nbsp;·&nbsp; Installed</p>
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
        </div>
    )
}
