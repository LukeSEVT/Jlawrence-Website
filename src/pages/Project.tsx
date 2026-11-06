import { Link, useParams } from 'react-router-dom'
import { ArrowLink } from '../components/ArrowLink'
import { ImageReveal } from '../components/Reveal'
import { getProject, industryLabel, projects } from '../data/projects'
import { NotFound } from './NotFound'

export function Project() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <NotFound />

  const related = projects
    .filter(
      (item) => item.industry === project.industry && item.slug !== project.slug,
    )
    .slice(0, 3)

  const images = [project.image, ...(project.gallery ?? [])]

  return (
    <>
      <section className="grid gap-1 lg:grid-cols-12">
        <div className="bg-panel px-5 py-10 md:px-8 md:py-14 lg:col-span-5">
          <p className="label text-accent">{industryLabel(project.industry)}</p>
          <h1 className="nameplate mt-4 text-4xl md:text-6xl">{project.title}</h1>
          {project.client ? (
            <p className="mt-4 text-muted">{project.client}</p>
          ) : null}
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-1">
            <div className="bg-raised p-4">
              <p className="label text-muted">Industry</p>
              <p className="mt-2">{industryLabel(project.industry)}</p>
            </div>
            {project.metric ? (
              <div className="bg-raised p-4">
                <p className="label text-muted">{project.metric.label}</p>
                <p className="mt-2 font-display text-2xl tracking-tight">
                  {project.metric.value}
                </p>
              </div>
            ) : (
              <div className="bg-raised p-4">
                <p className="label text-muted">Studio</p>
                <p className="mt-2">Puget Sound</p>
              </div>
            )}
          </div>
          <ArrowLink to="/work" variant="ghost" className="mt-8">
            All work
          </ArrowLink>
        </div>
        <ImageReveal className="min-h-[320px] bg-raised lg:col-span-7 lg:min-h-full">
          <img
            src={project.image}
            alt={project.title}
            className="h-full min-h-[320px] w-full object-cover lg:absolute lg:inset-0"
          />
        </ImageReveal>
      </section>

      {images.length > 1 ? (
        <section className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.slice(1).map((src) => (
            <div key={src} className="overflow-hidden bg-panel">
              <img
                src={src}
                alt=""
                className="h-full min-h-[220px] w-full object-cover"
              />
            </div>
          ))}
        </section>
      ) : null}

      {project.video ? (
        <div className="bg-panel p-1">
          <div className="aspect-video w-full bg-ink">
            <iframe
              src={project.video}
              title={`${project.title} video`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}

      {related.length ? (
        <section>
          <div className="bg-panel px-5 py-6">
            <p className="label text-muted">More {industryLabel(project.industry)}</p>
          </div>
          <div className="mt-1 grid gap-1 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/work/${item.slug}`}
                className="group bg-panel"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="border-t-4 border-ink p-5">
                  <p className="font-display text-xl tracking-tight">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}
