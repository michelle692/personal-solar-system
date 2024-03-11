import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber';
import { usePromptContext } from '../ContextProvider';
import { GradientTexture } from '@react-three/drei';

function Planet({ planet, dirView }) {

  const { fadeIn, togglePlay, setPlanet } = usePromptContext();
  const mesh = useRef();

  const color = dirView ? planet.directorColor : planet.colors;

  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.z += 0.005;
  });

  useEffect(() => {
    fadeIn(mesh.current.material, 750, () => { });
  }, [fadeIn]);

  const handleClick = () => {
    setPlanet(planet)
    togglePlay()
  }

  return (
    <mesh ref={mesh} onClick={handleClick} position={planet.position} scale={0.25}>
      <sphereGeometry args={[planet.myRating, 20]} />
      <meshBasicMaterial transparent opacity={0} >
        <GradientTexture stops={[0, 1]} colors={color} size={2000} />
      </meshBasicMaterial>
    </mesh>
  );
}

export default Planet;