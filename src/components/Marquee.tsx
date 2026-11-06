type Props = {
  items: readonly string[]
}

export function Marquee({ items }: Props) {
  const loop = [...items, ...items]

  return (
    <div className="overflow-hidden bg-panel py-4">
      <div className="marquee-track flex w-max items-center gap-10 px-6">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="label whitespace-nowrap text-paper">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}
