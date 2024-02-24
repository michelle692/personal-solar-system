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

        {/* first ring */}
        <Ecliptic xRadius={1.7}/>
        <Planet scale={0.1} position={[1.5, 0.8, 0]} sound={sound2} />
        <Planet scale={0.5} position={[-1.5, -0.8, 0]} sound={sound3} />

        {/* second ring */}
        <Ecliptic xRadius={2.8} zRadius={1.2}/>
        {/* <Planet scale={0.1} position={[2.3, 1.3, 0]} sound={sound2} />
        <Planet scale={0.5} position={[-2.3, -1.3, 0]} sound={sound2} /> */}
      </Canvas>
    </div>
  );
}

export default App;
