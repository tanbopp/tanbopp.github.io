import { useParams, Link, Navigate } from 'react-router-dom'
import projects from '../data/projects'
import FadeIn from '../components/FadeIn'
import MediaItem from '../components/MediaItem'
import { renderContent } from '../utils/renderContent'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <article>
      {/* Banner */}
      <section className="relative w-full aspect-video max-h-[80vh] overflow-hidden">
        <img
          src={project.banner || project.thumbnail}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </section>

      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <FadeIn>
          <Link
            to="/"
            className="text-sm text-secondary hover:text-white transition-colors"
          >
            Back to work
          </Link>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="mt-8 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            {project.name}
          </h1>
        </FadeIn>

        {project.shortDescription && (
          <FadeIn delay={200}>
            <p className="mt-6 text-xl text-secondary leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>
          </FadeIn>
        )}

        {/* Meta Grid */}
        <FadeIn delay={300}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            {project.workFor && (
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary/60 mb-2">Client</p>
                <p className="text-sm text-white">{project.workFor}</p>
              </div>
            )}
            {project.year && (
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary/60 mb-2">Year</p>
                <p className="text-sm text-white">{project.year}</p>
              </div>
            )}
            {project.deliverables && (
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary/60 mb-2">Deliverables</p>
                <p className="text-sm text-white">{project.deliverables}</p>
              </div>
            )}
            {project.platform && (
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary/60 mb-2">Platform</p>
                <p className="text-sm text-white">{project.platform}</p>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <FadeIn delay={400}>
            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-secondary/60 mb-4">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-white/80 bg-white/5 px-4 py-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Showcase Links */}
        {project.showcase && project.showcase.length > 0 && (
          <FadeIn>
            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-secondary/60 mb-4">Project Showcase</p>
              <div className="flex flex-wrap gap-4">
                {project.showcase.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white underline underline-offset-4 decoration-secondary/30 hover:decoration-white transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        {project.outline && (
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-2xl font-semibold text-white mb-6">Overview</h2>
              <div>{renderContent(project.outline)}</div>
            </div>
          </FadeIn>
        )}

        {project.challenges && (
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-2xl font-semibold text-white mb-6">Challenges</h2>
              <div>{renderContent(project.challenges)}</div>
            </div>
          </FadeIn>
        )}

        {project.solution && (
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-2xl font-semibold text-white mb-6">Solution</h2>
              <div>{renderContent(project.solution)}</div>
            </div>
          </FadeIn>
        )}
      </section>

      {/* Project Media */}
      {project.media && project.media.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-32">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-white mb-10 max-w-4xl mx-auto">
              Project Gallery
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {project.media.map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <MediaItem item={item} />
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Next Project */}
      {nextProject && (
        <section className="border-t border-[#1d1d1f]">
          <Link
            to={`/project/${nextProject.slug}`}
            className="group block mx-auto max-w-6xl px-6 py-24"
          >
            <p className="text-xs uppercase tracking-widest text-secondary/60 mb-4">
              Next Project
            </p>
            <h3 className="text-3xl md:text-5xl font-semibold text-white group-hover:text-secondary transition-colors">
              {nextProject.name}
            </h3>
          </Link>
        </section>
      )}
    </article>
  )
}
