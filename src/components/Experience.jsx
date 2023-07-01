import {Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from 'three';

export const Experience = () => {

  const map = useTexture(
    "textures/dreamlike_milky_way_with_blackhole.jpg"
  )

  return (
    <>
    <ambientLight intensity={0.5}/>
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide}/>
      </mesh>
    </>
  );
};
