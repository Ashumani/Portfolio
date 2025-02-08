import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Snowfall = (props) => {
  const ref = useRef();
  const [positions] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= delta * 0.2; // Move downwards
      if (positions[i + 1] < -1.5) positions[i + 1] = 1.5; // Reset position when out of view
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const SnowfallCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Snowfall />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SnowfallCanvas;