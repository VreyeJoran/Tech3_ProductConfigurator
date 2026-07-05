import { Canvas } from "@react-three/fiber";
import Experience from "../../Experience";
import { useState } from "react";
import * as THREE from "three";
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn";

const cameraSettings = {
  rotate: [0, Math.PI / 8, 0],
  fov: 50,
  position: [1.2, 1, 6.8],
};

const ProductConfiguratorWindow = () => {
  const [isGrabbingCanvas, setIsGrabbingCanvas] = useState(false);
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className="w-full h-150 flex flex-col justify-center items-center p-(--spacing-m) rounded-4xl bg-radial from-(--color-bg-quaternary)/20 to-(--color-bg-primary)/30 text-(--color-text-primary) border border-(--color-border-primary)/10">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-(--spacing-xxs) max-w-42">
          <p className="font-secondary font-light text-2xs lg:text-xs text-(--color-text-tertiary)">
            LIVE PREVIEW
          </p>
          <p className="font-secondary text-xs lg:text-sm text-(--color-text-secondary)">
            Midnight Blue • Charcoal Gray
          </p>
        </div>
        <div className="flex items-center gap-(--spacing-s)">
          <p className="px-(--spacing-m) py-(--spacing-s) bg-(--color-bg-success)/20 rounded-xl border border-(--color-border-success)/30 font-secondary text-xs lg:text-sm text-(--color-text-success)">
            In Stock
          </p>
          <SecondaryBtn
            label="Toggle"
            icon="rotate.svg"
            onClick={() => setIsRotating(!isRotating)}
          />
        </div>
      </div>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ toneMapping: THREE.CineonToneMapping }}
        camera={cameraSettings as any}
        className={`w-full ${
          isGrabbingCanvas ? "cursor-grabbing" : "hover:cursor-grab"
        }`}
        onMouseDown={() => setIsGrabbingCanvas(true)}
        onMouseUp={() => setIsGrabbingCanvas(false)}
      >
        <Experience canInteract isRotating={isRotating} />
      </Canvas>
      <div className="w-8/10 grid grid-cols-3 grid-rows-2 gap-x-(--spacing-m) gap-y-2 justify-items-center border-t border-(--color-border-primary)/10 pt-(--spacing-m)">
        <p className="font-secondary text-xs lg:text-sm text-(--color-text-tertiary)">
          ANC
        </p>
        <p className="font-secondary text-xs lg:text-sm text-(--color-text-tertiary)">
          Battery
        </p>
        <p className="font-secondary text-xs lg:text-sm text-(--color-text-tertiary)">
          Weight
        </p>
        <p className="font-secondary text-xs lg:text-sm text-(--color-text-primary)">
          45dB
        </p>
        <p className="font-secondary text-xs lg:text-sm text-(--color-text-primary)">
          40hrs
        </p>
        <p className="font-secondary text-xs lg:text-sm text-(--color-text-primary)">
          250g
        </p>
      </div>
    </div>
  );
};

export default ProductConfiguratorWindow;
