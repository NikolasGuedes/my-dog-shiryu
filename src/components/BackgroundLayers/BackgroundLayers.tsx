import { motion } from "motion/react";
import "./BackgroundLayers.css";

export default function BackgroundLayers() {
  return (
    <>
      <motion.div
        className="background-layer background-layer-texture"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.72, ease: "easeOut" }}
      />
      <motion.img
        className="background-layer background-layer-logo"
        src="/imgs/Shiryu_logo.png"
        alt="Shiryu"
        initial={{ opacity: 0, x: "-50%", y: 18, scale: 0.96 }}
        animate={{ opacity: 0.86, x: "-50%", y: 0, scale: 1 }}
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
