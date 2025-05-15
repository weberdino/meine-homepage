// src/3d/Ground.jsx
import { Plane } from '@react-three/drei';

function Ground() {
  return (
    <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <meshStandardMaterial color="#555" />
    </Plane>
  );
}

export default Ground;
