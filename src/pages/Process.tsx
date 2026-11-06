import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLink } from '../components/ArrowLink'
import { Reveal } from '../components/Reveal'
import { gates, phases } from '../data/services'
import { copy, site } from '../data/site'

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 20%'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      <section className="grid gap-1 lg:grid-cols-12">
        <div className="bg-panel px-5 py-12 md:px-8 md:py-16 lg:col-span-8">
          <p className="label text-accent">Process manual · 5 phases / 3 gates</p>
          <h1 className="nameplate mt-4 text-5xl md:text-7xl">
            Concept to
            <br />
            installation
          </h1>
          <p className="mt-6 max-w-xl text-muted">{copy.fullService}</p>
          <ArrowLink to="/contact" variant="solid" className="mt-8">
            Start a project
          </ArrowLink>
        </div>
        <div className="grid grid-cols-2 gap-1 lg:col-span-4">
          <div className="bg-panel p-6">
            <p className="label text-muted">Phases</p>
            <p className="mt-3 font-display text-5xl">5</p>
          </div>
          <div className="bg-panel p-6">
            <p className="label text-muted">Gates</p>
            <p className="mt-3 font-display text-5xl">3</p>
          </div>
          <div className="col-span-2 bg-panel p-6">
            <p className="label text-muted">On time</p>
            <p className="mt-3 font-display text-5xl">{site.onTime}%</p>
          </div>
        </div>
      </section>

      <section ref={trackRef} className="relative">
        <div className="pointer-events-none absolute top-0 bottom-0 left-[22px] w-px bg-line md:left-[38px]">
          <motion.div
            className="w-px bg-accent origin-top"
            style={{ height }}
          />
        </div>
        <div className="grid gap-1">
          {phases.map((phase, index) => (
            <Reveal key={phase.id} delay={index * 0.04}>
              <article className="grid gap-1 md:grid-cols-12">
                <div className="flex items-start gap-4 bg-panel px-5 py-8 md:col-span-3">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-accent" />
                  <p className="label text-accent">{phase.num}</p>
                </div>
                <div className="bg-panel px-5 py-8 md:col-span-6">
                  <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                    {phase.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-muted">{phase.body}</p>
                </div>
                <div className="bg-panel px-5 py-8 md:col-span-3">
                  <p className="label text-muted">Output</p>
                  <p className="mt-3">{phase.output}</p>
                  <p className="label mt-6 text-faint">Gate · {phase.gate}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-panel px-5 py-8">
          <p className="label text-muted">Quality gates</p>
          <h2 className="nameplate mt-3 text-4xl md:text-5xl">
            Nothing moves on unreviewed
          </h2>
        </div>
        <div className="mt-1 grid gap-1 md:grid-cols-3">
          {gates.map((gate) => (
            <div key={gate.num} className="bg-panel p-6">
              <p className="label text-accent">{gate.num}</p>
              <p className="label mt-6 text-muted">{gate.after}</p>
              <h3 className="mt-2 font-display text-2xl tracking-tight">
                {gate.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{gate.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
