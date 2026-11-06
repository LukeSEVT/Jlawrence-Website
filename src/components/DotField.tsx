import { useEffect, useRef } from 'react'

export function DotField() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 24
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 24
      el.style.backgroundPosition = `${x}px ${y}px`
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="dot-field pointer-events-none absolute inset-0 opacity-70"
      aria-hidden
    />
  )
}
