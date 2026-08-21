"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <Sparkles
        count={70}
        scale={[9, 5, 4]}
        size={2.4}
        speed={0.3}
        opacity={0.55}
        color="#4f8bff"
        noise={1.5}
      />
      <Sparkles
        count={40}
        scale={[7, 4, 4]}
        size={1.6}
        speed={0.2}
        opacity={0.4}
        color="#7dd3fc"
        noise={1}
      />
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[2.6, 1.2, -2]}>
          <torusGeometry args={[0.6, 0.16, 16, 60]} />
          <meshBasicMaterial color="#4f8bff" wireframe transparent opacity={0.25} />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[-2.8, -1, -3]}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshBasicMaterial color="#7dd3fc" wireframe transparent opacity={0.2} />
        </mesh>
      </Float>
    </>
  );
}

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
