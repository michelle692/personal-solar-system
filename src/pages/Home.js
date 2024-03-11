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

  const infoOptions = useMemo(() => {
    return {
      title: {value: 'not selected'},
      director: {value: 'not selected', readonly: true},
      song: {value: 'not selected', readonly: true},
      artist: {value: 'not selected', readonly: true},
      myRating: {value: 'not selected', readonly: true},
      rottenTomatoes: {value: 'not selected', readonly: true},
    }
  })

  const directorOptions = useMemo(() => {
    return {
      directorView: {value: false},
      blue: {value: 'male', disabled: true},
      pink: {value: 'female', disabled: true},
      mix: {value: 'both', disabled: true},
    }
  })

  const settingOptions = useMemo(() => {
    return {
      rotate: {value: false},
      rotateSpeed: {value: 0.2, min: 0.1, max: 0.5, step: 0.1},
    }
  })

  const info = useControls('Information (please do not edit)', infoOptions)
  const dirView = useControls('Director Demographic', directorOptions)
  const settings = useControls('Settings', settingOptions)
  
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
            dirView={dirView.directorView} />
        ))}

      </Canvas>

      {/* Left months panel */}
      {planetsConfig.map((config, index) => (
        <Text
          key={index}
          text={config.month}
          positionTop={30 + index * 50}
          onClick={() => toggleRing(index)}
          isSelected={selected[index]}
        />
      ))}

    </div>
  );
}

export default Home;
