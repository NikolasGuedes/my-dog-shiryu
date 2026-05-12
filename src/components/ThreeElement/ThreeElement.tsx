import { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function ThreeElement() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/3D/Shiryu.glb");


  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <group
        ref={modelRef}
        position={[0, -1.35, 0]}
        scale={1}
      >
        <primitive object={scene} />
      </group>
    </>
  );
}

useGLTF.preload("/3D/Shiryu.glb");
