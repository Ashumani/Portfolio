import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Galaxy = ({ isMobile }) => {

    const computer = useGLTF("./need_some_space/scene.gltf");
    // const computer = useGLTF("./galactic_incident/scene.gltf");

  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 40, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <pointLight  position={[5, 5, 5]} intensity={-3.2} />
      {/* <ambientLight intensity={0.1} />
      <directionalLight position={[1, 1, 1]} intensity={0} castShadow /> */}
      <Environment preset="city" />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.40 : 1.75}
        position={isMobile ? [0, -4, -0.6] : [3.30, -2, 1]}
        rotation={[2, 2, 5]}
      />
    </mesh>
  );
};

const GalaxyCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [-15, 5, 3], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // enableZoom={false}
          maxPolarAngle={Math.PI / 1}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={3}
        />
        <Galaxy isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GalaxyCanvas;
