import { Canvas } from "@react-three/fiber";
import Experience from "../Experience";
import * as THREE from "three";
import MainButton from "../components/MainButton/MainButton";

const cameraSettings = {
  rotate: [0, Math.PI / 8, 0],
  fov: 50,
  position: [1.2, 1, 6.8],
};

const Home = () => {
  return (
    <div className="h-svh w-svw flex flex-col items-center justify-center gap-(--spacing-s) px-(--spacing-l)">
      <div className="flex flex-col items-center gap-(--spacing-s)">
        <h1 className="font-primary font-semibold text-3xl lg:text-4xl text-(--color-text-primary)">
          SONIC X PRO
        </h1>
        <p className="font-secondary text-base lg:text-l text-(--color-text-secondary)">
          Custom Edition
        </p>
      </div>
      <div className="w-full h-6/10">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ toneMapping: THREE.CineonToneMapping }}
          camera={cameraSettings as any}
        >
          <Experience canInteract={false} />
        </Canvas>
      </div>
      <div className="w-4/10">
        <a href="/config">
          <MainButton label={"Start Configurating"} isTitle />
        </a>
      </div>
    </div>
  );
};

export default Home;
