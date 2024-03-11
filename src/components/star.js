import React, { useEffect, useMemo, useRef } from 'react'
import { fragmentShader, vertexShader } from '../shaders/planetShader';
import { useFrame } from '@react-three/fiber';
import { Vector2 } from 'three';
import * as THREE from 'three';
import { usePromptContext } from '../ContextProvider';

function Star({ scale  }) {

  const { sound } = usePromptContext();

  const mesh = useRef();
  const analyzer = useRef();

  const uniforms = useMemo(() => {
    return (
      {
        u_resolution: {
          type: 'v2',
          value: new Vector2(window.innerWidth, window.innerHeight)
        },
        u_time: {
          type: 'f',
          value: 0.0
        },
        u_frequency: {
          type: 'f',
          value: 0.0
        }
      }
    )
  }, []);


  useEffect(() => {
    analyzer.current = new THREE.AudioAnalyser(sound.current, 32);

  }, [analyzer, sound])
  

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();

    mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
    mesh.current.rotation.z = clock.getElapsedTime() * 0.1;

    if (analyzer.current.data)
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    mesh.current.material.uniforms.u_frequency.value = analyzer.current.getAverageFrequency();
    mesh.current.scale.x = 0.75 + analyzer.current.getAverageFrequency() / 1000;
    mesh.current.scale.y = 0.75 + analyzer.current.getAverageFrequency() / 1000;
    mesh.current.scale.z = 0.75 + analyzer.current.getAverageFrequency() / 1000;

  })

  return (
    <mesh ref={mesh} > 
      <icosahedronGeometry args={[1.3, 20]} scale={scale}/>
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} wireframe />
    </mesh>
  );
}

export default Star;