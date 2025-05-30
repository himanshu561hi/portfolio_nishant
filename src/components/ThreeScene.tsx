
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShapes() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.2;
      sphereRef.current.rotation.y += delta * 0.3;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.1;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x += delta * 0.1;
      boxRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={sphereRef} position={[-2, 0, 0]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="#9b87f5" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1.5}>
        <mesh ref={torusRef} position={[2, 0, 0]}>
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
          <meshStandardMaterial color="#F97316" metalness={0.3} roughness={0.4} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1}>
        <mesh ref={boxRef} position={[0, 1.5, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#D6BCFA" metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <PresentationControls
          global
          rotation={[0.1, 0, 0]}
          polar={[-0.2, 0.2]}
          azimuth={[-0.5, 0.5]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <FloatingShapes />
        </PresentationControls>
        
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={10}
          blur={1.5}
          far={4}
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
