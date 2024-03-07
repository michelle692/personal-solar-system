import React, { useState, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { usePromptContext } from '../PromptContext';
import { fragmentShader, vertexShader } from '../shaders/gradientShader';

function Planet({ scale, position, color1, color2, index }) {

  const mesh = useRef();
  const { movie, setPlanet, togglePlay } = usePromptContext();
  
  const colors = useMemo(() => ({
    u_color1: { value: new THREE.Color(color1) },
    u_color2: { value: new THREE.Color('#ffffff') },
    u_color3: { value: new THREE.Color(color2) },
  }), [color1, color2]);

  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.z += 0.005;
  });


  const handleClick = () => {
    setPlanet(index);
    togglePlay();
  }

  console.log("Selected Movie: ", movie);

  return (
    <mesh ref={mesh} onClick={handleClick} position={position} scale={scale}> 
      <icosahedronGeometry args={[0.3, 5]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        // wireframe
        uniforms={colors}
      />
    </mesh>
  );
}

export default Planet;