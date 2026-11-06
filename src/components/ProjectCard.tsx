import { Link } from 'react-router-dom'
import { industryLabel, type Project } from '../data/projects'
import { cn } from '../lib/cn'

type Props = {
  project: Project
  large?: boolean
}

export function ProjectCard({ project, large }: Props) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex h-full flex-col bg-panel"
    >
      <div
        className={cn(
          'relative overflow-hidden bg-raised',
          large ? 'min-h-[280px] flex-1 md:min-h-[380px]' : 'aspect-[5/4]',
        )}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex items-end justify-between gap-4 border-t-4 border-ink p-5">
        <div className="min-w-0">
          <p className="label text-accent">{industryLabel(project.industry)}</p>
          <h3 className="mt-2 font-display text-xl leading-tight tracking-tight md:text-2xl">
            {project.title}
          </h3>
          {project.client ? (
            <p className="mt-1 text-sm text-muted">{project.client}</p>
          ) : null}
        </div>
        <span className="label shrink-0 text-paper transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  )
}
