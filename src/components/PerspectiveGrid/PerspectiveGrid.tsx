import { Grid } from "@react-three/drei";
import * as THREE from "three";

export default function PerspectiveGrid() {
  return (
    <Grid
      args={[28, 28]}
      position={[0, -1.35, -1]}
      cellSize={0.55}
      cellThickness={0.62}
      cellColor="#494949"
      sectionSize={2.2}
      sectionThickness={0.9}
      sectionColor="#494949"
      fadeDistance={18}
      fadeStrength={1.35}
      fadeFrom={0.42}
      side={THREE.DoubleSide}
    />
  );
}
