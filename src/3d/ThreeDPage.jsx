import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function SpinningBox() {
  const meshRef = useRef();

  // Dreht die Box bei jedem Frame leicht
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function ThreeDPage() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <SpinningBox />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
