import React from 'react'
import { Link } from 'react-router-dom'
// CSS_IMPORT_DISABLED
import projectsData from '../data/projects.json'

// Pre-load all project images via Vite glob
const allImages = import.meta.glob('../assets/img/**/*.{jpg,jpeg,png}', { eager: true })

function resolveImage(folder, filename) {
    const key = `../assets/img/${folder}/${filename}`
    return allImages[key]?.default ?? ''
}

export default function Projects() {
    const heroSrc = resolveImage('castlefield', 'castlefield_1_f.jpg')

    return (
        <div>
            {/* ── Page Hero ── */}
            <section className="page-hero">
                <div className="page-hero__bg" style={{ backgroundImage: `url(${heroSrc})` }}></div>
                <div className="hero__overlay"></div>
                <div className="page-hero__content">
                    <h1 className="hero__heading">Featured <em>Projects</em></h1>
                    <p className="hero__sub">Residential &nbsp;·&nbsp; Commercial &nbsp;·&nbsp; Custom</p>
                </div>
            </section>

            {/* ── Gallery Grid ── */}
            <section className="projects" id="projects">
                <div className="container">
                    <div className="projects__grid">
                        {projectsData.map((project) => {
                            const thumb = resolveImage(project.id, project.thumb)
                            return (
                                <Link
                                    key={project.id}
                                    to={`/projects/${project.id}`}
                                    className="project-card"
                                    aria-label={`View ${project.title} project`}
                                >
                                    <img
                                        src={thumb}
                                        alt={project.title}
                                        className="project-card__img"
                                    />
                                    <div className="project-card__overlay">
                                        <div className="project-card__info">
                                            <p className="project-card__category">{project.category} &nbsp;·&nbsp; {project.location}</p>
                                            <h3 className="project-card__title">{project.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
