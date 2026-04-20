import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ThreeElement() {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(90),
          0,
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
