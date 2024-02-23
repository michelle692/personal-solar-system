import './App.css';
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Planet from './components/planet';
import Star from './components/star';
import Ecliptic from './components/ecliptic';
import { OrbitControls, PositionalAudio } from '@react-three/drei';

function App() {

  const sound = useRef();
  const sound2 = useRef();
  const sound3 = useRef();
  
  return (
    <div className="App">
       <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
        <PositionalAudio url='drive.mp3' distance={2} loop ref={sound2} autoplay={false} />
        <PositionalAudio url='unwritten.mp3' distance={2} loop ref={sound} autoplay={false}/>
        <PositionalAudio url='bullettrain.mp3' distance={2} loop ref={sound3} autoplay={false} />
        <OrbitControls autoRotate={true} />
        <Star scale={1} sound={sound}/>
        <Ecliptic xRadius={2.5}/>
        <Planet scale={0.1} position={[2.5, 0, 0]} sound={sound2} />
        <Planet scale={0.5} position={[-2.5, 0, 0]} sound={sound3} />
      </Canvas>
    </div>
  );
}

export default App;
