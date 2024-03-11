import React, { useState, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { usePromptContext } from '../ContextProvider';
import { GradientTexture, sphereGeometry } from '@react-three/drei';

function Core() {

  const mesh = useRef();
  const { planet } = usePromptContext();

  const colorPalette = planet.colors;

  useFrame(() => {
    
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.z += 0.005;
    
  });

  // console.log("Selected Movie: ", movie);

  return (
    <mesh ref={mesh} > 
    <sphereGeometry args={[0.8, 20]}/>
    <meshBasicMaterial transparent opacity={1}>
      <GradientTexture
        stops={[0, 1]} // As many stops as you want
        colors={colorPalette} 
        size={2000} // Size is optional, default = 1024
      />
    </meshBasicMaterial>
  </mesh>

  );
}

export default Core;