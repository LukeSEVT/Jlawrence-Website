import { Link, useParams } from 'react-router-dom'
import { ArrowLink } from '../components/ArrowLink'
import { getService, services } from '../data/services'
import { NotFound } from './NotFound'

export function Service() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined
  if (!service) return <NotFound />

  const others = services.filter((item) => item.slug !== service.slug)

  return (
    <>
      <section className="grid gap-1 lg:grid-cols-12">
        <div className="bg-panel px-5 py-12 md:px-8 md:py-16 lg:col-span-8">
          <p className="label text-accent">
            {service.index} / {service.kicker}
          </p>
          <h1 className="nameplate mt-4 text-5xl md:text-7xl">{service.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{service.body}</p>
          <ArrowLink to="/contact" variant="solid" className="mt-8">
            Start a project
          </ArrowLink>
        </div>
        <div className="bg-panel px-5 py-10 lg:col-span-4">
          <p className="label text-muted">In this discipline</p>
          <ul className="mt-6 space-y-3">
            {service.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                {point}
              </li>
            ))}
          </ul>
          {'tools' in service && service.tools ? (
            <div className="mt-10">
              <p className="label text-muted">Design software</p>
              <p className="mt-3 text-sm text-paper">{service.tools.join(' · ')}</p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="grid gap-1 md:grid-cols-3">
        {others.map((item) => (
          <Link
            key={item.slug}
            to={`/services/${item.slug}`}
            className="group bg-panel p-6 hover:bg-raised"
          >
            <p className="label text-accent">{item.index}</p>
            <h2 className="mt-4 font-display text-2xl tracking-tight">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{item.summary}</p>
            <span className="label mt-6 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </section>
    </>
  )
}
