import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { type JSX, useMemo } from "react";
import usePropertiesStore from "../../Stores/propertyStore";

type GLTFResult = GLTF & {
  nodes: {
    HeadBand: THREE.Mesh;
    HeadbandCussion: THREE.Mesh;
    Earpiece: THREE.Mesh;
    Earcup: THREE.Mesh;
    Joint: THREE.Mesh;
    Mesh: THREE.Mesh;
    Speaker: THREE.Mesh;
  };
};

const formatOptions = {
  Round: "./models/HeadphonesRound.glb",
  Oval: "./models/HeadphonesOval.glb",
};

const colorOptions = {
  White: { Main: "#EDF4F5", Cushion: "#9F9D9F" },
  Blue: { Main: "#4E4B67", Cushion: "#9F968E" },
  Pink: { Main: "#9D7170", Cushion: "#C2ABAC" },
  Green: { Main: "#5D674C", Cushion: "#B1B29C" },
};

export default function Model({}, props: JSX.IntrinsicElements["group"]) {
  const { format, color, material } = usePropertiesStore();

  const { nodes } = useGLTF(formatOptions[format]) as unknown as GLTFResult;

  // Helper hook
  const useConfiguredTexture = (
    path: string,
    options?: { repeat?: [number, number] }
  ): THREE.Texture => {
    const tex = useTexture(path) as THREE.Texture;
    tex.flipY = false;
    if (options?.repeat) {
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(options.repeat[0], options.repeat[1]);
    }
    return tex;
  };

  // Load required textures
  const meshNormalRound = useConfiguredTexture("/textures/mesh-normal.jpg");
  const meshAlphaRound = useConfiguredTexture("/textures/mesh-alpha.jpg");
  const meshNormalOval = useConfiguredTexture("/textures/oval-mesh-normal.jpg");
  const meshAlphaOval = useConfiguredTexture("/textures/oval-mesh-alpha.jpg");

  const polyesterNormal = useConfiguredTexture(
    "/textures/polyester-normal.jpg",
    {
      repeat: [10, 10],
    }
  );
  const polyesterRoughness = useConfiguredTexture(
    "/textures/polyester-roughness.jpg",
    { repeat: [10, 10] }
  );
  const cottonNormal = useConfiguredTexture("/textures/cotton-normal.png", {
    repeat: [20, 20],
  });
  const cottonRoughness = useConfiguredTexture(
    "/textures/cotton-roughness.png",
    {
      repeat: [20, 20],
    }
  );

  const leatherNormalRound = useConfiguredTexture(
    "/textures/leather-normal.jpg"
  );
  const leatherRoughnessRound = useConfiguredTexture(
    "/textures/leather-roughness.jpg"
  );
  const leatherNormalOval = useConfiguredTexture(
    "/textures/oval-leather-normal.jpg"
  );
  const leatherRoughnessOval = useConfiguredTexture(
    "/textures/oval-leather-roughness.jpg"
  );

  const isRound = format === "Round";
  const meshNormalMap = isRound ? meshNormalRound : meshNormalOval;
  const meshAlphaMap = isRound ? meshAlphaRound : meshAlphaOval;

  // Create materials
  const { standardMaterial, speakerMaterial, meshMaterial, cushionMaterials } =
    useMemo(() => {
      const standard = new THREE.MeshStandardMaterial({
        color: colorOptions[color].Main,
        roughness: 0.7,
        metalness: 0.3,
      });
      const speaker = new THREE.MeshStandardMaterial({
        color: "#2a2b2a",
        roughness: 0.8,
      });
      const mesh = new THREE.MeshStandardMaterial({
        color: "#000000",
        normalMap: meshNormalMap,
        alphaMap: meshAlphaMap,
        transparent: true,
        side: THREE.DoubleSide,
      });
      const polyester = new THREE.MeshStandardMaterial({
        color: colorOptions[color].Cushion,
        normalMap: polyesterNormal,
        roughnessMap: polyesterRoughness,
      });
      const cotton = new THREE.MeshStandardMaterial({
        color: colorOptions[color].Cushion,
        normalMap: cottonNormal,
        roughnessMap: cottonRoughness,
      });
      const leather = new THREE.MeshStandardMaterial({
        color: colorOptions[color].Cushion,
        normalMap: isRound ? leatherNormalRound : leatherNormalOval,
        roughnessMap: isRound ? leatherRoughnessRound : leatherRoughnessOval,
      });
      return {
        standardMaterial: standard,
        speakerMaterial: speaker,
        meshMaterial: mesh,
        cushionMaterials: {
          Polyester: polyester,
          Cotton: cotton,
          Leather: leather,
        } as Record<string, THREE.MeshStandardMaterial>,
      };
    }, [color, isRound, meshNormalMap, meshAlphaMap]);

  return (
    <group {...props} dispose={null} position={[0, -1.1, 0]} scale={1.2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeadBand.geometry}
        material={standardMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeadbandCussion.geometry}
        material={cushionMaterials[material]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earpiece.geometry}
        material={standardMaterial}
        position={[1.604, -0.257, 0]}
        rotation={[0, 0, -0.382]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Earcup.geometry}
          material={cushionMaterials[material]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Joint.geometry}
        material={standardMaterial}
        position={[1.625, -0.265, 0]}
        rotation={[0, 0, -0.382]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh.geometry}
        material={meshMaterial}
        position={[1.604, -0.257, 0]}
        rotation={[0, 0, -0.382]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker.geometry}
        material={speakerMaterial}
        position={[1.604, -0.257, 0]}
        rotation={[0, 0, -0.382]}
      />
    </group>
  );
}

useGLTF.preload("/HeadphonesRound.glb");
