import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-svh bg-ink text-paper">
      <div className="sticky top-0 z-50 bg-ink p-1 pb-0">
        <Header />
      </div>
      <main className="flex flex-col gap-1 p-1">
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}
