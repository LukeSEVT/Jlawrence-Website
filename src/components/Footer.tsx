import { Link } from 'react-router-dom'
import { certifications, nav, site } from '../data/site'

export function Footer() {
  return (
    <footer className="flex flex-col gap-1">
      <div className="grid gap-1 md:grid-cols-12">
        <div className="bg-panel px-5 py-10 md:col-span-7 md:px-8 md:py-14">
          <p className="label text-accent">J Lawrence Industries</p>
          <p className="nameplate mt-4 text-[18vw] leading-[0.8] md:text-[8.5vw]">
            JLI
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Design build. Mechanical design, project management, and design for
            manufacturing. Puget Sound, since {site.established}.
          </p>
        </div>
        <div className="grid gap-1 md:col-span-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-panel p-6">
              <p className="label text-muted">Navigate</p>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-paper hover:text-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="text-paper hover:text-accent">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-panel p-6">
              <p className="label text-muted">Studio</p>
              <a
                href={site.emailHref}
                className="mt-4 block text-sm hover:text-accent"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="mt-2 block text-sm hover:text-accent"
              >
                {site.phone}
              </a>
              <p className="mt-4 text-sm text-muted">{site.location}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
            {certifications.map((item) => (
              <div key={item.label} className="bg-panel p-4">
                <p className="label text-muted">{item.label}</p>
                <p className="mt-2 font-display text-lg tracking-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 bg-panel px-5 py-3">
        <p className="label text-muted">
          {site.location} · Est. {site.established} · {site.onTime}% on time ·
          CAGE {certifications[1].value}
        </p>
        <p className="label text-faint">© {new Date().getFullYear()} JLI</p>
      </div>
    </footer>
  )
}
