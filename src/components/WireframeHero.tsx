import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

function Fixture({ scroll }: { scroll: number }) {
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.12 + scroll * 0.002
    ref.current.rotation.x = 0.18
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
  const [scroll, setScroll] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    const onScroll = () => setScroll(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!ready) {
    return <div className="diag-field h-full min-h-[320px] w-full" />
  }

  return (
    <div className="relative h-full min-h-[320px] w-full">
      <div className="diag-field pointer-events-none absolute inset-0 opacity-60" />
      <Canvas
        camera={{ position: [2.8, 1.6, 3.4], fov: 38 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Fixture scroll={scroll} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  )
}
