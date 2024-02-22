import React, { useState } from 'react'

function Planet({ scale, position, color, sound }) {
  const [currentColor, setCurrentColor] = useState(color);
  const [play, setPlay] = useState(false);

  function playMusic() {
    if (play) {
      sound.current.pause();
    } else {
      sound.current.play();
    }
    setPlay(!play);
  }

  const handleClick = () => {
    const randomColor =  '#' + Math.floor(Math.random() * 16777215).toString(16);
    setCurrentColor(randomColor);
    playMusic()
  }
  return (
    <mesh onClick={handleClick} scale={scale} position={position}> 
      <sphereGeometry args={[1, 50, 50]}/>
      <meshStandardMaterial color={currentColor} />
    </mesh>
  );
}

export default Planet;