import { ArrowLink } from '../components/ArrowLink'

export function NotFound() {
  return (
    <section className="grid min-h-[60svh] gap-1 md:grid-cols-12">
      <div className="flex flex-col justify-between bg-panel px-5 py-12 md:col-span-8 md:px-8 md:py-16">
        <p className="label text-accent">404</p>
        <div>
          <h1 className="nameplate text-6xl md:text-8xl">
            Page not
            <br />
            on the drawing
          </h1>
          <p className="mt-6 max-w-md text-muted">
            That route is not in the programme. Back to the studio, or into the
            work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowLink to="/" variant="solid">
              Home
            </ArrowLink>
            <ArrowLink to="/work" variant="ghost">
              Work
            </ArrowLink>
          </div>
        </div>
      </div>
      <div className="diag-field min-h-[200px] bg-panel md:col-span-4" />
    </section>
  )
}
