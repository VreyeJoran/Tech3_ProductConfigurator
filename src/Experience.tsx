import React, { Suspense } from "react";
import { BakeShadows, Html, OrbitControls } from "@react-three/drei";
import Headphones from "./components/Headphones/Headphones";
import usePropertiesStore from "./Stores/propertyStore";

interface ExperienceProps {
  canInteract: boolean;
  isRotating?: boolean;
}
const HeadphonesComponent = Headphones as unknown as React.ComponentType<any>;

const Experience = ({ canInteract, isRotating = true }: ExperienceProps) => {
  const directionalLights = [
    {
      position: [0, 2, -3],
      intensity: 3.6,
    },
    {
      position: [0, 2, 3],
      intensity: 3.6,
    },
    {
      position: [6, 1, 0],
      intensity: 1,
    },
    {
      position: [-6, 1, 0],
      intensity: 1,
    },
    {
      position: [0, -2, -4],
      intensity: 2.4,
    },
    {
      position: [0, -2, 4],
      intensity: 2.4,
    },
  ];
  const { format } = usePropertiesStore();

  return (
    <>
      <Suspense
        fallback={
          <Html className="w-full flex justify-center items-center font-secondary text-2xl text-text-primary text-nowrap">
            Loading model...
          </Html>
        }
      >
        <OrbitControls
          enablePan={false}
          minDistance={canInteract ? 0.5 : 9}
          maxDistance={9}
          autoRotate={isRotating}
          autoRotateSpeed={1}
          enableRotate={canInteract ? true : false}
          enableZoom={canInteract ? true : false}
        />
        <BakeShadows key={format} />

        <ambientLight intensity={0.1} />
        <pointLight position={[0, -0.5, 0]} intensity={5} />
        {directionalLights.map((lightProps, index) => (
          <directionalLight
            key={index}
            castShadow
            shadow-mapSize={[2048, 2048]}
            position={lightProps.position as [number, number, number]}
            intensity={lightProps.intensity}
          />
        ))}
        <HeadphonesComponent />
      </Suspense>
    </>
  );
};

export default Experience;
