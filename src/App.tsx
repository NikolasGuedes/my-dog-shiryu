import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 70,
          near: 1,
          far: 100,
          position: [0, 5, 10],
        }}
      >
        <ThreeElement />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI}
        />
       
        <gridHelper args={[10, 10, "grey", "grey"]} />
      </Canvas>
    </>
  );
}

export default App;
