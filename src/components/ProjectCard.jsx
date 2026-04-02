import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

export default function ProjectCard({ project, index }) {
  const [ref, isVisible] = useInView()

  return (
    <Link
      to={`/project/${project.slug}`}
      ref={ref}
      className={`group block fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden bg-bg-card">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-white group-hover:text-secondary transition-colors">
            {project.name}
          </h3>
          {project.year && (
            <span className="text-sm text-secondary">{project.year}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs text-secondary/70 bg-white/5 px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs text-secondary/50 px-1 py-1">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
