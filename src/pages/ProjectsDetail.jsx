import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
// CSS_IMPORT_DISABLED
import projectsData from '../data/projects.json'

// Pre-load all project images via Vite glob
const allImages = import.meta.glob('../assets/img/**/*.{jpg,jpeg,png}', { eager: true })

function resolveImage(folder, filename) {
    const key = `../assets/img/${folder}/${filename}`
    return allImages[key]?.default ?? ''
}

export default function ProjectsDetail() {
    const { id } = useParams()
    const project = projectsData.find(p => p.id === id)

    const [lightboxIndex, setLightboxIndex] = useState(null)

    const openLightbox = (i) => setLightboxIndex(i)
    const closeLightbox = () => setLightboxIndex(null)

    const prev = useCallback(() => {
        setLightboxIndex(i => (i - 1 + project.images.length) % project.images.length)
    }, [project])

    const next = useCallback(() => {
        setLightboxIndex(i => (i + 1) % project.images.length)
    }, [project])

    useEffect(() => {
        if (lightboxIndex === null) return
        function onKey(e) {
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
            if (e.key === 'Escape') closeLightbox()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [lightboxIndex, prev, next])

    // Lock body scroll when lightbox open
    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [lightboxIndex])

    if (!project) {
        return (
            <div className="detail-not-found">
                <h2>Project not found.</h2>
                <Link to="/projects" className="btn btn--dark">Back to Projects</Link>
            </div>
        )
    }

    const heroSrc = resolveImage(project.id, project.thumb)

    return (
        <div>
            {/* ── Hero ── */}
            <section className="page-hero page-hero--tall">
                <div className="page-hero__bg" style={{ backgroundImage: `url(${heroSrc})` }}></div>
                <div className="hero__overlay"></div>
                <div className="page-hero__content">
                    <Link to="/projects" className="detail__back label">
                        <span className="detail__back-arrow">←</span> All Projects
                    </Link>
                    <h1 className="hero__heading" style={{ marginTop: '1.2rem' }}>{project.title}</h1>
                    <p className="hero__sub">
                        {project.category} &nbsp;·&nbsp; {project.location} &nbsp;·&nbsp; {project.year}
                    </p>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="detail-intro">
                <div className="container">
                    <div className="detail-intro__inner reveal">
                        <div className="detail-intro__meta">
                            <div className="detail-meta-item">
                                <span className="label">Category</span>
                                <span className="detail-meta-item__value">{project.category}</span>
                            </div>
                            <div className="detail-meta-item">
                                <span className="label">Location</span>
                                <span className="detail-meta-item__value">{project.location}</span>
                            </div>
                            <div className="detail-meta-item">
                                <span className="label">Year</span>
                                <span className="detail-meta-item__value">{project.year}</span>
                            </div>
                        </div>
                        <p className="detail-intro__desc">{project.description}</p>
                    </div>
                </div>
            </section>

            {/* ── Photo Gallery ── */}
            <section className="detail-gallery">
                <div className="container">
                    <div className="detail-gallery__grid">
                        {project.images.map((filename, i) => {
                            const src = resolveImage(project.id, filename)
                            return (
                                <button
                                    key={filename}
                                    className="detail-gallery__item"
                                    onClick={() => openLightbox(i)}
                                    aria-label={`View photo ${i + 1} of ${project.images.length}`}
                                >
                                    <img src={src} alt={`${project.title} — photo ${i + 1}`} className="detail-gallery__img" />
                                    <div className="detail-gallery__hover">
                                        <span className="detail-gallery__zoom">&#43;</span>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Lightbox ── */}
            {lightboxIndex !== null && (
                <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
                    <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">&#10005;</button>
                    <button className="lightbox__nav lightbox__nav--prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">&#8592;</button>
                    <div className="lightbox__img-wrap" onClick={e => e.stopPropagation()}>
                        <img
                            src={resolveImage(project.id, project.images[lightboxIndex])}
                            alt={`${project.title} — photo ${lightboxIndex + 1}`}
                            className="lightbox__img"
                        />
                        <p className="lightbox__counter">{lightboxIndex + 1} / {project.images.length}</p>
                    </div>
                    <button className="lightbox__nav lightbox__nav--next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next">&#8594;</button>
                </div>
            )}
        </div>
    )
}

