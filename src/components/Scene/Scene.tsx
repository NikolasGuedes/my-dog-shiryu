import BackgroundLayers from "../BackgroundLayers/BackgroundLayers";
import Footer from "../Footer/Footer";
import SceneCanvas from "../SceneCanvas/SceneCanvas";
import "./Scene.css";

export default function Scene() {
  return (
    <main className="scene">
      <BackgroundLayers />
      <SceneCanvas />
      <Footer />
    </main>
  );
}
