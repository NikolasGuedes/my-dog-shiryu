import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PerspectiveGrid from "../PerspectiveGrid/PerspectiveGrid";
import ThreeElement from "../ThreeElement/ThreeElement";
import "./SceneCanvas.css";

export default function SceneCanvas() {
  return (
    <Canvas
      className="scene-canvas"
      camera={{
        fov: 75,
        near: 1,
        far: 100,
        position: [0, 4.2, 8],
      }}
    >
      <ThreeElement />
      <OrbitControls enableZoom={false} enablePan={false} />
      <PerspectiveGrid />
    </Canvas>
  );
}
