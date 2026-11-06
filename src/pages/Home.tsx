import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLink } from '../components/ArrowLink'
import { CountUp } from '../components/CountUp'
import { DotField } from '../components/DotField'
import { Marquee } from '../components/Marquee'
import { ProjectCard } from '../components/ProjectCard'
import { ImageReveal, Reveal } from '../components/Reveal'

const WireframeHero = lazy(() =>
  import('../components/WireframeHero').then((module) => ({
    default: module.WireframeHero,
  })),
)
import { featuredProjects, industries } from '../data/projects'
import { phases, services } from '../data/services'
import { copy, site } from '../data/site'

const stats = [
  { label: 'Established', value: site.established, prefix: '', suffix: '' },
  { label: 'On time', value: site.onTime, prefix: '', suffix: '%' },
  { label: 'Industries', value: site.industries, prefix: '', suffix: '' },
  { label: 'NASA parts', value: site.nasaParts, prefix: '', suffix: '+' },
] as const

export function Home() {
  const featured = featuredProjects()

  return (
    <>
      <section className="grid gap-1 lg:grid-cols-12 lg:min-h-[calc(100svh-76px)]">
        <div className="relative overflow-hidden bg-panel px-5 py-10 md:px-8 md:py-14 lg:col-span-7">
          <DotField />
          <div className="relative flex h-full min-h-[420px] flex-col justify-between">
            <p className="label text-accent">
              {site.location} · Est. {site.established} · {site.onTime}% on time
            </p>
            <div className="mt-10">
              <p className="label text-muted">
                Mechanical design → Project management → DFM
              </p>
              <h1 className="nameplate mt-5 text-[14vw] md:text-[7.4vw] lg:text-[5.6vw]">
                Design build
                <br />
                Puget Sound
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {copy.homeLead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ArrowLink to="/contact" variant="solid">
                  Start a project
                </ArrowLink>
                <ArrowLink to="/work" variant="ghost">
                  Selected work
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[340px] bg-panel lg:col-span-5">
          <Suspense fallback={<div className="diag-field h-full min-h-[340px]" />}>
            <WireframeHero />
          </Suspense>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-1 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-panel px-5 py-6">
            <p className="label text-muted">{stat.label}</p>
            <p className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </p>
          </div>
        ))}
      </section>

      <Marquee items={industries.map((item) => item.label)} />

      <section className="grid gap-1 lg:grid-cols-12">
        <Reveal className="bg-panel px-5 py-10 md:px-8 md:py-14 lg:col-span-7">
          <p className="label text-accent">Studio</p>
          <h2 className="nameplate mt-4 text-4xl md:text-6xl">
            {site.tagline}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {copy.about} {copy.pm}
          </p>
          <ArrowLink to="/about" variant="ghost" className="mt-8">
            About the studio
          </ArrowLink>
        </Reveal>
        <ImageReveal className="min-h-[280px] lg:col-span-5">
          <img
            src="/work/shop.jpg"
            alt="Manufacturing assembly at J Lawrence Industries"
            className="h-full w-full object-cover"
          />
        </ImageReveal>
      </section>

      <section className="grid gap-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-panel px-5 py-8 md:col-span-2 lg:col-span-4 lg:flex lg:items-end lg:justify-between">
          <div>
            <p className="label text-muted">Core disciplines</p>
            <h2 className="nameplate mt-3 text-4xl md:text-5xl">Services</h2>
          </div>
          <ArrowLink to="/services" variant="ghost" className="mt-6 lg:mt-0">
            All services
          </ArrowLink>
        </div>
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.06}>
            <Link
              to={`/services/${service.slug}`}
              className="group flex h-full flex-col justify-between bg-panel p-6 transition-colors duration-300 hover:bg-raised"
            >
              <div>
                <p className="label text-accent">{service.index}</p>
                <h3 className="mt-6 font-display text-2xl tracking-tight md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </div>
              <span className="label mt-8 text-paper transition-transform duration-300 group-hover:translate-x-1">
                View service →
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="grid gap-1 md:grid-cols-2">
        <div className="bg-panel px-5 py-8 md:col-span-2 md:flex md:items-end md:justify-between">
          <div>
            <p className="label text-muted">Selected work</p>
            <h2 className="nameplate mt-3 text-4xl md:text-5xl">
              Machines, tools, fixtures
            </h2>
          </div>
          <ArrowLink to="/work" variant="ghost" className="mt-6 md:mt-0">
            View all work
          </ArrowLink>
        </div>
        {featured.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.08}>
            <ProjectCard project={project} large />
          </Reveal>
        ))}
      </section>

      <section className="grid gap-1 md:grid-cols-5">
        <div className="bg-panel px-5 py-8 md:col-span-5 md:flex md:items-end md:justify-between">
          <div>
            <p className="label text-muted">How a programme runs</p>
            <h2 className="nameplate mt-3 text-4xl md:text-5xl">Process</h2>
          </div>
          <ArrowLink to="/process" variant="ghost" className="mt-6 md:mt-0">
            See the full process
          </ArrowLink>
        </div>
        {phases.map((phase, index) => (
          <Reveal key={phase.id} delay={index * 0.05}>
            <Link
              to="/process"
              className="group flex h-full flex-col bg-panel p-5 hover:bg-raised"
            >
              <p className="label text-accent">{phase.num}</p>
              <h3 className="mt-6 font-display text-xl tracking-tight">
                {phase.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{phase.output}</p>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-panel px-5 py-8 sm:col-span-2 lg:col-span-3">
          <p className="label text-muted">Industries we serve</p>
          <h2 className="nameplate mt-3 text-4xl md:text-5xl">
            Important key industries
          </h2>
        </div>
        {industries.map((industry) => (
          <Link
            key={industry.id}
            to={`/work?industry=${industry.id}`}
            className="group relative min-h-[220px] overflow-hidden bg-panel"
          >
            <img
              src={industry.image}
              alt=""
              className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
            />
            <div className="absolute inset-0 flex items-end p-5">
              <span className="font-display text-2xl tracking-tight">
                {industry.label}
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section className="grid gap-1 md:grid-cols-12">
        <div className="bg-accent px-5 py-12 text-ink md:col-span-8 md:px-10 md:py-16">
          <p className="label">Start a programme</p>
          <h2 className="nameplate mt-4 text-5xl md:text-7xl">
            Bring the tool
            <br />
            that has to work.
          </h2>
          <ArrowLink
            to="/contact"
            variant="line"
            className="mt-8 border-ink text-ink hover:bg-ink hover:text-paper hover:border-ink"
          >
            Get in touch
          </ArrowLink>
        </div>
        <div className="bg-panel px-5 py-10 md:col-span-4">
          <p className="label text-muted">Contact</p>
          <a href={site.emailHref} className="mt-6 block text-lg hover:text-accent">
            {site.email}
          </a>
          <a href={site.phoneHref} className="mt-2 block text-lg hover:text-accent">
            {site.phone}
          </a>
          <p className="mt-6 text-sm text-muted">{site.location}</p>
        </div>
      </section>
    </>
  )
}
