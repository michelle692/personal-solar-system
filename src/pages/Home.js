import '../App.css';
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Planet from '../components/planet';
import Star from '../components/star';
import Ecliptic from '../components/ecliptic';
import { OrbitControls, PositionalAudio, OrthographicCamera } from '@react-three/drei';
import { usePromptContext } from '../PromptContext';

function Home() {

  const { movie } = usePromptContext();
  const sound = useRef();
  
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
        <OrbitControls autoRotate={false} />
        <Star scale={1} sound={sound}/>

        {/* JULY - first ring */}
        <Ecliptic xRadius={1.7}/>
        <Planet scale={0.4} position={[1.5, 0.8, 0]} color1={'#f22b35'} color2={'#41acfd'} index={0} />
        <Planet scale={0.5} position={[-1.3, -0.3, -0.8]} color1={'#c90076'} color2={'#9fc5e8'} index={1} />
        <Planet scale={0.6} position={[1.3, 0.3, 0.8]} color1={'#000000'} color2={'#ffffff'} index={2} />

        {/* AUGUST - second ring */}
        <Ecliptic xRadius={2.7} zRadius={1.3}/>
        <Planet scale={0.4} position={[-2.3, -0.8, -0.8]} color1={'#ffe599'} color2={'#c27ba0'} index={3} />
        <Planet scale={0.5} position={[2.3, 0.8, 0.8]} color1={'#cc0000'} color2={'#000000'} index={4} />
        <Planet scale={0.6} position={[1.6, 1.1, -0.5]} color1={'#3d85c6'} color2={'#ffffff'} index={5} />
        <Planet scale={0.7} position={[-1.6, -1.1, 0.5]} color1={'#ffe599'} color2={'#c27ba0'} index={6} />
        <Planet scale={0.8} position={[-0.5, -0.7, 1.0]} color1={'#c90076'} color2={'#ffffff'} index={7} />

        {/* SEPTEMBER - third ring */}
        <Ecliptic xRadius={3.7} zRadius={1.6}/>
        <Planet scale={0.4} position={[-3.3, -1.4, -0.7]} color1={'#6fa8dc'} color2={'#b4a7d6'} index={8} />
        <Planet scale={0.5} position={[3.3, 1.4, 0.7]} color1={'#c90076'} color2={'#2986cc'} index={9} />
        <Planet scale={0.6} position={[2.7, 1.6, -0.2]} color1={'#c90076'} color2={'#6a329f'} index={10} />
        <Planet scale={0.7} position={[-2.7, -1.6, 0.2]} color1={'#cc0000'} color2={'#e69138'} index={11} />

        {/* OCTOBER - fourth ring */}
        <Ecliptic xRadius={4.7} zRadius={1.9}/>
        <Planet scale={0.4} position={[-2.0, -0.1, -1.9]} color1={'#f9cb9c'} color2={'#d9ead3'} index={12} />
        <Planet scale={0.5} position={[2.0, 0.1, 1.9]} color1={'#f9cb9c'} color2={'#d9ead3'}index={13} />
        <Planet scale={0.6} position={[0.4, 1.0, -1.6]} color1={'#c27cf1'} color2={'#7ac003'} index={14} />

        {/* NOVEMBER - fifth ring */}
        <Ecliptic xRadius={5.7} zRadius={2.2}/>
        <Planet scale={0.4} position={[5.1, 2.1, 1.2]} color1={'#ce7e00'} color2={'#990000'} index={15} />
        <Planet scale={0.5} position={[-5.1, -2.1, -1.2]} color1={'#ce7e00'} color2={'#990000'} index={16} />
        <Planet scale={0.6} position={[-0.5, -1.1, 1.9]} color1={'#ce7e00'} color2={'#990000'} index={17} />

        {/* DECEMBER - sixth ring */}
        <Ecliptic xRadius={6.7} zRadius={2.5}/>
        <Planet scale={0.4} position={[-4.6, -1.3, -2.3]} color1={'#0b5394'} color2={'#cfe2f3'} index={18} />
        <Planet scale={0.5} position={[4.6, 1.3, 2.3]} color1={'#000000'} color2={'#cc0000'} index={19} />
        <Planet scale={0.6} position={[5.8, 2.8, 0.5]} color1={'#38761d'} color2={'#351c75'} index={20} />
        <Planet scale={0.7} position={[-5.8, -2.8, -0.5]} color1={'#38761d'} color2={'#ffe599'} index={21} />
        <Planet scale={0.8} position={[2.8, 2.2, -1.4]} color1={'#674ea7'} color2={'#000000'} index={22} />

        {/* JANUARY - seventh ring */}
        <Ecliptic xRadius={7.7} zRadius={2.8}/>
        <Planet scale={0.4} position={[-6.7, -2.5, -2.1]} color1={'#fff2cc'} color2={'#cfe2f3'} index={23}/>
        <Planet scale={0.5} position={[6.7, 2.5, 2.1]} color1={'#990000'} color2={'#ffffff'} index={24} />
        <Planet scale={0.6} position={[-2.0, 0.3, -2.8]} color1={'#fff2cc'} color2={'#cc0000'} index={25} />
        <Planet scale={0.7} position={[2.0, -0.3, 2.8]} color1={'#f1c232'} color2={'#7f6000'} index={26} />
        <Planet scale={0.8} position={[-0.7, 0.9, -2.7]} color1={'#c90076'} color2={'#b4a7d6'} index={27} />
        <Planet scale={0.7} position={[0.7, -0.9, 2.7]} color1={'#cc0000'} color2={'#eeeeee'} index={28} />
        <Planet scale={0.9} position={[-5.7, -1.8, -2.6]} color1={'#fff2cc'} color2={'#9fc5e8'} index={29} />

        {/* FEBRUARY - eigth ring */}
        <Ecliptic xRadius={8.7} zRadius={3.1} index={0} />
        <Planet scale={0.4} position={[-5.6, -1.4, -3.1]} color1={'#cc0000'} color2={'#000000'} index={30} />
        <Planet scale={0.5} position={[5.6, 1.4, 3.1]} color1={'#ffe599'} color2={'#f6b26b'} index={31} />
        <Planet scale={0.6} position={[-3.7, -0.4, -3.2]} color1={'#c90076'} color2={'#ffe599'} index={32} />
        <Planet scale={0.7} position={[3.7, 0.4, 3.2]} color1={'#6fa8dc'} color2={'#ffe599'} index={33} />
        <Planet scale={0.8} position={[-3.7, -2.7, 1.7]} color1={'#6fa8dc'} color2={'#ea9999'} index={34} />


        
      </Canvas>
    </div>
  );
}

export default Home;
