import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

type Props = {
  to: string
  children: ReactNode
  variant?: 'solid' | 'line' | 'ghost'
  className?: string
  external?: boolean
}

export function ArrowLink({
  to,
  children,
  variant = 'line',
  className,
  external,
}: Props) {
  const classes = cn(
    'group inline-flex items-center gap-3 text-[13px] tracking-[0.08em] uppercase font-medium transition-colors duration-300',
    variant === 'solid' &&
      'bg-accent text-ink px-5 py-3 hover:bg-paper',
    variant === 'line' &&
      'border border-paper/80 px-5 py-3 hover:bg-accent hover:border-accent hover:text-ink',
    variant === 'ghost' && 'text-paper hover:text-accent',
    className,
  )

  const inner = (
    <>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  )

  if (external || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return (
      <a href={to} className={classes}>
        {inner}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {inner}
    </Link>
  )
}
