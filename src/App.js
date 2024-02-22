import './App.css';
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Planet from './components/planet';
import { OrbitControls, PositionalAudio } from '@react-three/drei';

function App() {

  const sound = useRef();
  const sound2 = useRef();
  
  return (
    <div className="App">
       <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
        <PositionalAudio url='virginsuicides.mp3' distance={2} loop ref={sound} autoplay={false}/>
        <PositionalAudio url='drive.mp3' distance={2} loop ref={sound2} autoplay={false} />
        <OrbitControls autoRotate={true} />
        <Planet scale={0.2} position={[1.5, 0, 0]} sound={sound} />
        <Planet scale={0.5} position={[-1.5, 0, 0]} sound={sound2} />
      </Canvas>
    </div>
  );
}

export default App;
