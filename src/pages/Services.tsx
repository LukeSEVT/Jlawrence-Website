import { Link } from 'react-router-dom'
import { ArrowLink } from '../components/ArrowLink'
import { Reveal } from '../components/Reveal'
import { services } from '../data/services'
import { copy, software } from '../data/site'

export function Services() {
  return (
    <>
      <section className="grid gap-1 lg:grid-cols-12">
        <div className="bg-panel px-5 py-12 md:px-8 md:py-16 lg:col-span-8">
          <p className="label text-accent">Services</p>
          <h1 className="nameplate mt-4 text-5xl md:text-7xl">
            Mechanical design,
            <br />
            project management, DFM
          </h1>
          <p className="mt-6 max-w-xl text-muted">{copy.about}</p>
          <ArrowLink to="/contact" variant="solid" className="mt-8">
            Start a project
          </ArrowLink>
        </div>
        <div className="bg-panel px-5 py-10 lg:col-span-4">
          <p className="label text-muted">Software</p>
          <ul className="mt-6 space-y-3">
            {software.map((item) => (
              <li key={item} className="font-display text-2xl tracking-tight">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-1">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.04}>
            <Link
              to={`/services/${service.slug}`}
              className="group grid gap-1 bg-ink md:grid-cols-12"
            >
              <div className="bg-panel px-5 py-8 md:col-span-3">
                <p className="label text-accent">{service.index}</p>
              </div>
              <div className="bg-panel px-5 py-8 md:col-span-6">
                <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-lg text-muted">{service.summary}</p>
              </div>
              <div className="flex items-center justify-between bg-panel px-5 py-8 md:col-span-3">
                <span className="label text-muted">{service.kicker}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  )
}
