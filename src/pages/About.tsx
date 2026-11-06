import { ArrowLink } from '../components/ArrowLink'
import { CountUp } from '../components/CountUp'
import { ImageReveal, Reveal } from '../components/Reveal'
import { copy, disciplines, people, site, software } from '../data/site'

const facts = [
  { label: 'Established', value: site.established, suffix: '' },
  { label: 'On time', value: site.onTime, suffix: '%' },
  { label: 'Industries', value: site.industries, suffix: '' },
  { label: 'NASA parts', value: site.nasaParts, suffix: '+' },
]

export function About() {
  return (
    <>
      <section className="grid gap-1 lg:grid-cols-12">
        <div className="bg-panel px-5 py-12 md:px-8 md:py-16 lg:col-span-7">
          <p className="label text-accent">About</p>
          <h1 className="nameplate mt-4 text-5xl md:text-7xl">
            Project innovation
            <br />
            in manufacturing
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{copy.about}</p>
          <p className="mt-4 max-w-xl text-muted">{copy.pm}</p>
        </div>
        <ImageReveal className="min-h-[280px] lg:col-span-5">
          <img
            src="/work/aerial.jpg"
            alt="Industrial site"
            className="h-full w-full object-cover"
          />
        </ImageReveal>
      </section>

      <section className="grid grid-cols-2 gap-1 md:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-panel p-6">
            <p className="label text-muted">{fact.label}</p>
            <p className="mt-3 font-display text-4xl tracking-tight">
              <CountUp value={fact.value} suffix={fact.suffix} />
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-1 lg:grid-cols-12">
        <Reveal className="bg-panel px-5 py-10 md:px-8 lg:col-span-7">
          <p className="label text-muted">Capabilities</p>
          <h2 className="nameplate mt-4 text-4xl md:text-5xl">
            Assembly tooling
            <br />
            and components
          </h2>
          <p className="mt-6 max-w-xl text-muted">{copy.homeLead}</p>
          <p className="mt-4 max-w-xl text-muted">{copy.fullService}</p>
          <p className="mt-4 max-w-xl text-muted">{copy.assembly}</p>
        </Reveal>
        <div className="grid gap-1 lg:col-span-5">
          <div className="bg-panel p-6">
            <p className="label text-muted">Disciplines</p>
            <ul className="mt-4 space-y-2">
              {disciplines.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-panel p-6">
            <p className="label text-muted">Design software</p>
            <p className="mt-4 font-display text-2xl tracking-tight">
              {software.join(' · ')}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-panel px-5 py-8">
          <p className="label text-muted">Studio</p>
          <h2 className="nameplate mt-3 text-4xl">Contacts on the programme</h2>
        </div>
        <div className="mt-1 grid gap-1 md:grid-cols-2">
          {people.map((person) => (
            <div key={person.email} className="bg-panel p-6 md:p-8">
              <p className="label text-accent">{person.role}</p>
              <h3 className="mt-4 font-display text-3xl tracking-tight">
                {person.name}
              </h3>
              {person.lines.map((line) => (
                <p key={line} className="mt-2 text-sm text-muted">
                  {line}
                </p>
              ))}
              <a
                href={`tel:${person.phone.replace(/\s/g, '')}`}
                className="mt-4 block hover:text-accent"
              >
                {person.phone}
              </a>
              <a
                href={`mailto:${person.email}`}
                className="mt-1 block text-sm hover:text-accent"
              >
                {person.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-1 md:grid-cols-12">
        <div className="bg-accent px-5 py-12 text-ink md:col-span-8 md:px-10">
          <h2 className="nameplate text-5xl md:text-6xl">
            Build the next one
            <br />
            with us
          </h2>
          <ArrowLink
            to="/contact"
            variant="line"
            className="mt-8 border-ink text-ink hover:bg-ink hover:text-paper hover:border-ink"
          >
            Start a project
          </ArrowLink>
        </div>
        <ImageReveal className="min-h-[220px] md:col-span-4">
          <img
            src="/work/shop.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </ImageReveal>
      </section>
    </>
  )
}
