import React, { useState } from 'react'

function Planet({ color, sound }) {
  const [currentColor, setCurrentColor] = useState(color);

  console.log("sound", sound);

  const handleClick = () => {
    const randomColor =  '#' + Math.floor(Math.random() * 16777215).toString(16);
    setCurrentColor(randomColor);
  }
  return (
    <mesh onClick={handleClick}> 
      <sphereGeometry args={[1.5, 50, 50]}/>
      <meshStandardMaterial color={currentColor} />
    </mesh>
  );
}

export default Planet;