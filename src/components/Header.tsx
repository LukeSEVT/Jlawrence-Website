import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'
import { cn } from '../lib/cn'
import { ArrowLink } from './ArrowLink'

function isActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

export function Header() {
  const { pathname } = useLocation()
  const navRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const [bar, setBar] = useState({ left: 0, width: 0, opacity: 0 })
  const [open, setOpen] = useState(false)

  const placeActive = () => {
    const index = nav.findIndex((item) => isActive(pathname, item.to))
    const el = itemRefs.current[index]
    const navEl = navRef.current
    if (index < 0 || !el || !navEl) {
      setBar((current) => ({ ...current, opacity: 0 }))
      return
    }
    const parent = navEl.getBoundingClientRect()
    const box = el.getBoundingClientRect()
    setBar({
      left: box.left - parent.left,
      width: box.width,
      opacity: 1,
    })
  }

  const place = (el: HTMLElement | null) => {
    const navEl = navRef.current
    if (!el || !navEl) return
    const parent = navEl.getBoundingClientRect()
    const box = el.getBoundingClientRect()
    setBar({
      left: box.left - parent.left,
      width: box.width,
      opacity: 1,
    })
  }

  useEffect(() => {
    placeActive()
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    window.addEventListener('resize', placeActive)
    return () => window.removeEventListener('resize', placeActive)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="flex h-16 items-center justify-between gap-4 bg-panel px-4 md:h-[68px] md:px-6">
        <Link to="/" className="flex items-baseline gap-2 shrink-0" aria-label="J Lawrence Industries home">
          <span className="font-display text-2xl tracking-tight">JLI</span>
          <span className="hidden label text-muted sm:inline">J Lawrence</span>
        </Link>

        <nav
          ref={navRef}
          className="relative hidden h-full items-center gap-8 lg:flex"
          onMouseLeave={placeActive}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 h-[3px] bg-accent transition-[left,width,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: bar.left,
              width: bar.width,
              opacity: bar.opacity,
            }}
          />
          {nav.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              ref={(node) => {
                itemRefs.current[index] = node
              }}
              onMouseEnter={(event) => place(event.currentTarget)}
              className={cn(
                'label py-5 text-muted transition-colors duration-200 hover:text-paper',
                isActive(pathname, item.to) && 'text-paper',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ArrowLink to="/contact" variant="line" className="py-2.5">
              Get in touch
            </ArrowLink>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-paper/40 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  'absolute left-0 h-px w-4 bg-paper transition-transform duration-300',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-px w-4 bg-paper transition-opacity duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-px w-4 bg-paper transition-transform duration-300',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-x-0 top-[calc(4px+64px)] bottom-0 z-40 flex flex-col gap-1 bg-ink p-1 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-1 items-center bg-panel px-6"
            >
              <span
                className={cn(
                  'nameplate text-5xl',
                  isActive(pathname, item.to) && 'text-accent',
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="flex items-center justify-between bg-accent px-6 py-6 text-ink"
          >
            <span className="nameplate text-4xl">Get in touch</span>
            <span>→</span>
          </Link>
          <p className="label bg-panel px-6 py-4 text-muted">
            {site.location} · Est. {site.established}
          </p>
        </div>
      ) : null}
    </>
  )
}
