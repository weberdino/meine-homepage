// src/3d/ThreeDPage.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky, KeyboardControls } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import Ground from './Ground';
import * as THREE from 'three';

function Player() {
  const ref = useRef();

  // Steuerung über KeyboardControls
  useFrame(() => {
    if (!ref.current) return;

    const velocity = new THREE.Vector3();

    // Eventuelle Steuerung mit eigenen Tasten
    const keys = {
      forward: window.keyStates?.['w'] || window.keyStates?.['ArrowUp'],
      backward: window.keyStates?.['s'] || window.keyStates?.['ArrowDown'],
      left: window.keyStates?.['a'] || window.keyStates?.['ArrowLeft'],
      right: window.keyStates?.['d'] || window.keyStates?.['ArrowRight'],
    };

    if (keys.forward) velocity.z -= 0.1;
    if (keys.backward) velocity.z += 0.1;
    if (keys.left) velocity.x -= 0.1;
    if (keys.right) velocity.x += 0.1;

    const current = ref.current.translation();

    ref.current.setNextKinematicTranslation({
      x: current.x + velocity.x,
      y: current.y,
      z: current.z + velocity.z,
    });
  });

  return (
    <RigidBody
      ref={ref}
      colliders="cuboid"
      position={[0, 1, 0]}
      type="kinematicPosition"
    >
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
}

// Tastaturstatus global speichern
window.keyStates = {};
window.addEventListener('keydown', (e) => (window.keyStates[e.key.toLowerCase()] = true));
window.addEventListener('keyup', (e) => (window.keyStates[e.key.toLowerCase()] = false));

export default function ThreeDPage() {
  return (
    <div className="h-screen w-screen">
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w'] },
          { name: 'backward', keys: ['ArrowDown', 's'] },
          { name: 'left', keys: ['ArrowLeft', 'a'] },
          { name: 'right', keys: ['ArrowRight', 'd'] },
        ]}
      >
        <Canvas camera={{ position: [0, 10, 10], fov: 50 }}>

          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          <Physics gravity={[0, -9.81, 0]}>
            {/* Boden mit RigidBody */}
            <RigidBody type="fixed">
              <mesh receiveShadow position={[0, -1, 0]}>
                <boxGeometry args={[50, 1, 50]} />
                <meshStandardMaterial color="green" />
              </mesh>
            </RigidBody>

            {/* Player-Figur */}
            <Player />
          </Physics>

          <OrbitControls />
        </Canvas>
      </KeyboardControls>
    </div>
  );
}
