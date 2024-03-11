import '../App.css';
import React, { useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Star from '../components/star';
import Core from '../components/core';
import Ring from '../components/ring';
import Text from '../components/text';
import planetsConfig from '../data/config';
import { OrbitControls, PositionalAudio, OrthographicCamera } from '@react-three/drei';
import { useControls } from 'leva'
import { usePromptContext } from '../PromptContext';

function Home() {

  const { movie, selected, toggleRing } = usePromptContext();
  const sound = useRef();
  const [selectedMonth, setSelectedMonth] = useState('JUL 2023s');
  const months = [
    'JUL 2023', 'AUG 2023', 'SEP 2023', 'OCT 2023', 'NOV 2023', 'DEC 2023', 'JAN 2024', 'FEB 2024'
  ];

  const options = useMemo(() => {
    return {
      directorView: {value: false},
      rotate: {value: false},
      rotateSpeed: {value: 0.2, min: 0.1, max: 0.5, step: 0.1},
    }
  })

  const settings = useControls('Settings', options)
  
  return (
    <div className="App">
       <Canvas>
        <OrthographicCamera
          makeDefault
          zoom={100}
          near={1}
          far={2000}
          position={[0, 0, 200]}
        />
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
        <PositionalAudio url={movie.song} distance={10} loop ref={sound} autoplay={false}/>
        <OrbitControls autoRotate={settings.rotate} autoRotateSpeed={settings.rotateSpeed} />
        <Star scale={1} sound={sound}/>
        <Core />

        {planetsConfig.map((config, index) => (
          selected[index] && <Ring
            key={index}
            config={config}
            dirView={settings.directorView} />
        ))}

      </Canvas>

      {/* Left months panel. */}
      {planetsConfig.map((config, index) => (
        <Text
          key={index}
          text={config.month}
          positionTop={30 + index * 50} // Adjust the vertical spacing as needed
          onClick={() => toggleRing(index)}
          isSelected={selected[index]}
        />
      ))}

    </div>
  );
}

export default Home;
