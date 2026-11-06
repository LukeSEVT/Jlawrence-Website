import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

const motion = {
  scroll: 0,
  nx: 0,
  ny: 0,
  dragX: 0,
  dragY: 0,
  fine: false,
  reduce: false,
}

function Fixture() {
  const ref = useRef<Group>(null)
  const idle = useRef(0)

  useFrame((_, delta) => {
    const group = ref.current
    if (!group) return

    if (motion.reduce) {
      group.rotation.x = 0.18
      group.rotation.y = 0.35
      return
    }

    const dt = Math.min(delta, 0.05)
    idle.current += dt * 0.12

    const scrollRot = motion.scroll * 0.00105
    const hoverY = motion.fine ? motion.nx * 0.55 : 0
    const hoverX = motion.fine ? -motion.ny * 0.32 : 0

    const targetY = idle.current + scrollRot + hoverY + motion.dragY
    const targetX = 0.18 + hoverX + motion.dragX
    const ease = 1 - Math.exp(-7 * dt)

    group.rotation.y += (targetY - group.rotation.y) * ease
    group.rotation.x += (targetX - group.rotation.x) * ease
  })

  const orange = '#ff5418'
  const paper = '#f3efe6'

  return (
    <group ref={ref}>
      <mesh position={[0, -1.05, 0]}>
        <boxGeometry args={[2.6, 0.12, 1.7]} />
        <meshBasicMaterial color={orange} wireframe />
      </mesh>
      {[-1.1, 1.1].flatMap((x) =>
        [-0.65, 0.65].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, -0.15, z]}>
            <boxGeometry args={[0.12, 1.7, 0.12]} />
            <meshBasicMaterial color={orange} wireframe />
          </mesh>
        )),
      )}
      <mesh position={[0, 0.72, 0]}>
        <boxGeometry args={[2.4, 0.1, 1.5]} />
        <meshBasicMaterial color={orange} wireframe />
      </mesh>
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[0.22, 0.35, 1.6]} />
        <meshBasicMaterial color={paper} wireframe />
      </mesh>
      <mesh position={[0.35, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 1.1, 10]} />
        <meshBasicMaterial color={paper} wireframe />
      </mesh>
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[1.5, 0.08, 1.05]} />
        <meshBasicMaterial color={paper} wireframe />
      </mesh>
      <mesh position={[0, -0.32, 0]}>
        <boxGeometry args={[0.72, 0.32, 0.52]} />
        <meshBasicMaterial color={orange} wireframe />
      </mesh>
    </group>
  )
}

export function WireframeHero() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const drag = useRef<{
    id: number | null
    lastX: number
    lastY: number
  }>({ id: null, lastX: 0, lastY: 0 })
  const [ready, setReady] = useState(false)
  const [grabbing, setGrabbing] = useState(false)

  useEffect(() => {
    setReady(true)
    motion.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (motion.reduce) return

    const onScroll = () => {
      motion.scroll = window.scrollY
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const setFromClient = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect()
      const x = rect.width ? (clientX - rect.left) / rect.width : 0.5
      const y = rect.height ? (clientY - rect.top) / rect.height : 0.5
      motion.nx = Math.min(1, Math.max(-1, x * 2 - 1))
      motion.ny = Math.min(1, Math.max(-1, y * 2 - 1))
    }

    const onPointerMove = (event: PointerEvent) => {
      motion.fine = event.pointerType === 'mouse'
      if (event.pointerType !== 'mouse' && drag.current.id === null) return

      if (drag.current.id === event.pointerId) {
        motion.dragY += (event.clientX - drag.current.lastX) * 0.0055
        motion.dragX += (event.clientY - drag.current.lastY) * 0.0035
        drag.current.lastX = event.clientX
        drag.current.lastY = event.clientY
      } else if (event.pointerType === 'mouse') {
        setFromClient(event.clientX, event.clientY)
      }
    }

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      drag.current = {
        id: event.pointerId,
        lastX: event.clientX,
        lastY: event.clientY,
      }
      setGrabbing(true)
      el.setPointerCapture(event.pointerId)
    }

    const endDrag = (event: PointerEvent) => {
      if (drag.current.id !== event.pointerId) return
      drag.current.id = null
      setGrabbing(false)
    }

    const onPointerLeave = () => {
      if (drag.current.id !== null) return
      motion.nx = 0
      motion.ny = 0
    }

    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointerup', endDrag)
    el.addEventListener('pointercancel', endDrag)
    el.addEventListener('pointerleave', onPointerLeave)

    return () => {
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointerup', endDrag)
      el.removeEventListener('pointercancel', endDrag)
      el.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [ready])

  if (!ready) {
    return <div className="diag-field h-full min-h-[320px] w-full" />
  }

  return (
    <div
      ref={wrapRef}
      className={`relative h-full min-h-[320px] w-full touch-pan-y ${grabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
    >
      <div className="diag-field pointer-events-none absolute inset-0 opacity-60" />
      <Canvas
        camera={{ position: [2.8, 1.6, 3.4], fov: 38 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        style={{ touchAction: 'pan-y' }}
      >
        <Fixture />
      </Canvas>
    </div>
  )
}
