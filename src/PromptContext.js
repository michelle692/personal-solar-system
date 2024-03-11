import React, { createContext, useContext, useState, useRef } from "react";
import infoDatabase from './data/info';
import planetsConfig from "./data/config";

const movies = Object.keys(infoDatabase);

const getMovie = (index) => {
  const movie = movies[index];
  const directorName = infoDatabase[movie].directorName;
  const song = infoDatabase[movie].song;
  const songTitle = infoDatabase[movie].songTitle;
  const songArtist = infoDatabase[movie].songArtist;
  const myRating = infoDatabase[movie].myRating;
  const rottenTomatoes = infoDatabase[movie].rottenTomatoes;
  const directorColor = infoDatabase[movie].directorColor;
  const colorPalette = infoDatabase[movie].colorPalette;
  return { name: movie, directorName: directorName, song: song, songTitle: songTitle, songArtist: songArtist, myRating: myRating, rottenTomatoes: rottenTomatoes, directorColor: directorColor, colorPalette: colorPalette}
}

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

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
  // Keeps track of which rings are enabled / disabled.
  const [selected, setSelected] = useState(planetsConfig.map((config) => (config.selected)))

  const [source, setSource] = useState(planetsConfig[0].planets[0].songUrl);

  const sound = useRef();

  const toggleRing = (index) => {
    setSelected(prevState => {
      const newArray = [...prevState];
      newArray[index] = !newArray[index]
      return newArray;
    });
  }

  const [movie, setMovie] = useState(getMovie(0));
  const [play, setPlay] = useState(false);

  const setPlanet = (index) => {
    const movie = getMovie(index)
    setMovie(movie);
  }

  const togglePlay = () => {
    if ( play ) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  }

  return (
    <PromptContext.Provider value={{ movies, movie, setPlanet, play, togglePlay, fadeIn, fadeOut, selected, source, setSource, sound, toggleRing }} >
      { children }
    </PromptContext.Provider>
  );
};

export const usePromptContext = () => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error('usePrompt must be used within a PromptProvider')
  }
  return context;
};