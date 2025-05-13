// src/App.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Character() {
  const { scene, animations } = useGLTF('/character.glb')
  return <primitive object={scene} scale={0.01} />
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Character />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
