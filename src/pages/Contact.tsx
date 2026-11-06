import { useState, type FormEvent } from 'react'
import { cards, certifications, naics, people, site } from '../data/site'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`JLI enquiry — ${name || 'Project'}`)
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`,
    )
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section className="grid gap-1 lg:grid-cols-12">
        <div className="bg-panel px-5 py-12 md:px-8 md:py-16 lg:col-span-7">
          <p className="label text-accent">Get in touch</p>
          <h1 className="nameplate mt-4 text-5xl md:text-7xl">
            Tell us what
            <br />
            it has to do
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            Design-build from the Puget Sound area. Mechanical design, project
            management, and design for manufacturing.
          </p>
          <div className="mt-10 grid gap-1 sm:grid-cols-2">
            <a href={site.emailHref} className="bg-raised p-5 hover:text-accent">
              <p className="label text-muted">Email</p>
              <p className="mt-3 break-all">{site.email}</p>
            </a>
            <a href={site.phoneHref} className="bg-raised p-5 hover:text-accent">
              <p className="label text-muted">Phone</p>
              <p className="mt-3">{site.phone}</p>
            </a>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-1 bg-ink lg:col-span-5"
        >
          <label className="bg-panel px-5 py-4">
            <span className="label text-muted">Name</span>
            <input
              name="name"
              required
              className="mt-2 w-full bg-transparent text-paper outline-none"
              autoComplete="name"
            />
          </label>
          <label className="bg-panel px-5 py-4">
            <span className="label text-muted">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full bg-transparent text-paper outline-none"
              autoComplete="email"
            />
          </label>
          <label className="flex-1 bg-panel px-5 py-4">
            <span className="label text-muted">What it has to do</span>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-2 w-full resize-none bg-transparent text-paper outline-none"
            />
          </label>
          <button
            type="submit"
            className="bg-accent px-5 py-5 text-left text-ink transition-colors hover:bg-paper"
          >
            <span className="label">
              {sent ? 'Opening mail client →' : 'Send message →'}
            </span>
          </button>
        </form>
      </section>

      <section>
        <div className="bg-panel px-5 py-6">
          <p className="label text-muted">What happens next</p>
        </div>
        <div className="mt-1 grid gap-1 md:grid-cols-3">
          {people.map((person, index) => (
            <div key={person.email} className="bg-panel p-6">
              <p className="label text-accent">0{index + 1}</p>
              <p className="mt-6 font-display text-2xl tracking-tight">
                {person.name}
              </p>
              <p className="mt-1 text-sm text-muted">{person.role}</p>
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
                className="mt-1 block break-all text-sm hover:text-accent"
              >
                {person.email}
              </a>
            </div>
          ))}
          <div className="bg-panel p-6">
            <p className="label text-accent">03</p>
            <p className="mt-6 font-display text-2xl tracking-tight">
              Credit cards
            </p>
            <p className="mt-3 text-sm text-muted">{cards.join(' · ')}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-1 md:grid-cols-4">
        {certifications.map((item) => (
          <div key={item.label} className="bg-panel p-6">
            <p className="label text-muted">{item.label}</p>
            <p className="mt-3 font-display text-2xl tracking-tight">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="bg-panel p-5 md:p-8">
        <p className="label text-muted">NAICS codes</p>
        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
          {naics.map((code) => (
            <span key={code} className="label text-muted">
              {code}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
