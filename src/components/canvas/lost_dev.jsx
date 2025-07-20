import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Lost_Dev = ({ isMobile }) => {
  const lost_dev = useGLTF("./lost_programmer/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 40, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight  position={[5, 5, 5]} intensity={-3.2} />
      {/* <ambientLight intensity={0.1} />
      <directionalLight position={[1, 1, 1]} intensity={0} castShadow /> */}
      <Environment preset="city" />
      <primitive
        object={lost_dev.scene}
        scale={isMobile ? 1.45 : 1.75}
        position={isMobile ? [0, -4, -0.6] : [0, -2.25, 0]}
        rotation={[-2.10, -0.7, -0.1]}
      />
    </mesh>
  );
};

const DevCanvas = () => {
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
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Lost_Dev isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DevCanvas;
