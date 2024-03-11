import React from 'react';

function Info({ planet, isPlaying }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '2%',
        left: '2%',
        color: 'white',
        fontSize: '14px'
      }}
    >
      <p><b>Title:</b> {planet.movie} </p>
      <p><b>Director:</b> {planet.director} </p>
      <p><b>Song:</b> {planet.songTitle} </p>
      {/* <p><b>State:</b> {isPlaying} </p> */}
      <p><b>Artist:</b> {planet.songArtist} </p>
      <p><b>My Rating:</b> {parseInt(Number(planet.myRating) * 100)}% </p>
      <p><b>Rotten Tomatoes:</b> {planet.rottenTomatoes} </p>
    </div>
  );
}

export default Info;