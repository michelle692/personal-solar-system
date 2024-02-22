import './App.css';
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Planet from './components/planet';
import { OrbitControls, PositionalAudio } from '@react-three/drei';

function App() {
  // const [play, setPlay] = useState(false);

  const sound = useRef();

  // function playMusic() {
  //   if (play) {
  //     sound.current.pause();
  //   } else {
  //     sound.current.play();
  //   }
  //   setPlay(!play);
  // }
  
  return (
    <div className="App">
       <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
        <PositionalAudio url='drive.mp3' distance={10} loop ref={sound} autoplay={true}/>
        <OrbitControls autoRotate={true} />
        <Planet color='hotpink' sound={sound}/>
      </Canvas>
    </div>
  );
}

export default App;
