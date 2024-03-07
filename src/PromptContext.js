import React, { createContext, useContext, useState } from "react";
import infoDatabase from './data/info';

const movies = Object.keys(infoDatabase);

const getMovie = (index) => {
  const movie = movies[index];
  const song = infoDatabase[movie].song;
  const memorability = infoDatabase[movie].memorability;
  return { name: movie, song: song, memorability: memorability }
}

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
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
    <PromptContext.Provider value={{ movie, setPlanet, play, togglePlay }} >
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