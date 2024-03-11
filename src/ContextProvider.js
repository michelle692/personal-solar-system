import React, { createContext, useContext, useState, useRef } from "react";
import planetsConfig from "./data/config";

const fade = (material, duration, onComplete, direction) => {
  function complete(opacity) {
    return direction ? opacity >= 1 : opacity <= 0;
  }
  let startTime;

  function animateOpacity(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = (timestamp - startTime) / duration;
    const opacity = direction ? Math.min(1, progress) : Math.max(0, 1 - progress);
    material.opacity = opacity;

    if (complete(opacity)) {
      // Notify the caller about animation complete.
      onComplete();
    } else {
      // Animation not complete, keep animating.
      requestAnimationFrame(animateOpacity);
    }
  }
  // Start the initial animation frame.
  requestAnimationFrame(animateOpacity);
}

const fadeIn = (material, duration, onComplete) => {
  fade(material, duration, onComplete, true)
}

const fadeOut = (material, duration, onComplete) => {
  fade(material, duration, onComplete, false)
}

const Context = createContext();

export const ContextProvider = ({ children }) => {
  // Keeps track of which rings are enabled / disabled.
  const [selected, setSelected] = useState(planetsConfig.map((config) => (config.selected)))
  const [source, setSource] = useState(planetsConfig[0].planets[0].songUrl);
  const [planet, setPlanet] = useState(planetsConfig[0].planets[0])

  const sound = useRef();

  const toggleRing = (index) => {
    setSelected(prevState => {
      const newArray = [...prevState];
      newArray[index] = !newArray[index]
      return newArray;
    });
  }

  const togglePlay = () => {
    console.log('should play')
    if (sound.current) {
      console.log('there is sound')
      if (sound.current.isPlaying) {
        console.log("pausing ", planet.songTitle)
        sound.current.stop();
      } else {
        console.log("playing ", planet.songTitle)
        sound.current.play();
      } 
    }
  }

  return (
    <Context.Provider value={{sound, togglePlay, selected, toggleRing, fadeIn, fadeOut, planet, setPlanet, source, setSource }} >
      {children}
    </Context.Provider>
  );
};

export const usePromptContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('usePrompt must be used within a PromptProvider')
  }
  return context;
};