import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const CommingSoon = () => {
  const earth = useGLTF("./planet/pow_3d_word/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.5} position-y={0} rotation-y={0} />
  );
};

const CommingSoonCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 10,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <CommingSoon />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CommingSoonCanvas;
