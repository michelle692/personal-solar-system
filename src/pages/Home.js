import '../App.css';
import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Star from '../components/star';
import Core from '../components/core';
import Ring from '../components/ring';
import Info from '../components/info';
import planetsConfig from '../data/config';
import { OrbitControls, PositionalAudio, OrthographicCamera } from '@react-three/drei';
import { useControls } from 'leva'
import { usePromptContext } from '../ContextProvider';

function Home() {

  const { sound, selected, toggleRing, planet } = usePromptContext();
  const isPlaying = sound.current && sound.current.isPlaying;

  const monthOptions = useMemo(() => {
    return {
      JUL2023: { value: true, onChange: (v) => { toggleRing(0); } },
      AUG2023: { value: true, onChange: (v) => { toggleRing(1); } },
      SEP2023: { value: false, onChange: (v) => { toggleRing(2); } },
      OCT2023: { value: false, onChange: (v) => { toggleRing(3); } },
      NOV2023: { value: false, onChange: (v) => { toggleRing(4); } },
      DEC2023: { value: false, onChange: (v) => { toggleRing(5); } },
      JAN2024: { value: false, onChange: (v) => { toggleRing(6); } },
      FEB2024: { value: false, onChange: (v) => { toggleRing(7); } },
    }
  })

  const directorOptions = useMemo(() => {
    return {
      directorView: { value: false },
      blue: { value: 'male', disabled: true },
      pink: { value: 'female', disabled: true },
      mix: { value: 'both', disabled: true },
    }
  })

  const settingOptions = useMemo(() => {
    return {
      rotate: { value: false },
      rotateSpeed: { value: 0.2, min: 0.1, max: 0.5, step: 0.1 },
    }
  })

  const month = useControls('Month', monthOptions)
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
        <PositionalAudio url={planet.songUrl} distance={10} loop ref={sound} autoplay={true} />
        <OrbitControls autoRotate={settings.rotate} autoRotateSpeed={settings.rotateSpeed} />
        <Star scale={1} sound={sound} />
        <Core />

        {planetsConfig.map((config, index) => (
          selected[index] && <Ring
            key={index}
            config={config}
            dirView={dirView.directorView} />
        ))}

      </Canvas>

      <Info planet={planet} isPlaying={isPlaying} />
    </div>
  );
}

export default Home;
