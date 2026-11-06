import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import {
  industries,
  projectsByIndustry,
  type IndustryId,
} from '../data/projects'
import { cn } from '../lib/cn'

const filters = [
  { id: 'all', label: 'All' },
  ...industries.map((item) => ({ id: item.id, label: item.label })),
] as const

export function Work() {
  const [params, setParams] = useSearchParams()
  const raw = params.get('industry') ?? 'all'
  const active = filters.some((item) => item.id === raw) ? raw : 'all'
  const list = useMemo(
    () => projectsByIndustry(active as IndustryId | 'all'),
    [active],
  )

  return (
    <>
      <section className="grid gap-1 md:grid-cols-12">
        <div className="bg-panel px-5 py-12 md:col-span-8 md:px-8 md:py-16">
          <p className="label text-accent">Work</p>
          <h1 className="nameplate mt-4 text-5xl md:text-7xl">
            Selected
            <br />
            programmes
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            Assembly tooling, fixtures, analysis and installation across
            aerospace, hydro, industrial, marine, structures and transportation.
          </p>
        </div>
        <div className="bg-panel px-5 py-8 md:col-span-4 md:flex md:flex-col md:justify-end">
          <p className="label text-muted">Count</p>
          <p className="mt-3 font-display text-6xl tracking-tight">{list.length}</p>
          <p className="mt-2 text-sm text-muted">projects in view</p>
        </div>
      </section>

      <div className="flex flex-wrap gap-1">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (item.id === 'all') setParams({})
              else setParams({ industry: item.id })
            }}
            className={cn(
              'label bg-panel px-4 py-3 text-muted transition-colors hover:text-paper',
              active === item.id && 'bg-accent text-ink hover:text-ink',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <section className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </section>

      <div className="bg-panel px-5 py-6 text-sm text-muted">
        Looking for a discipline instead?{' '}
        <Link to="/services" className="text-paper hover:text-accent">
          See services →
        </Link>
      </div>
    </>
  )
}
