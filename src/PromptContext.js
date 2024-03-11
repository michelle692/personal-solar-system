import React, { createContext, useContext, useState } from "react";
import infoDatabase from './data/info';

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
    <PromptContext.Provider value={{ movies, movie, setPlanet, play, togglePlay }} >
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