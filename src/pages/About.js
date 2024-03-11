import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/About.css';

const About = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  }

  return (
    <div className="about-container">
      <h1>About The Visualization</h1>
      <div className="additional-info">
        <p>I wanted to visualize all the movies and mini tv series I watched in the past eight months and decided to display it as a solar system. I used React Three Fiber to build the website, so the solar system components are all 3D!
        </p>
        <ul>
          <li>Orbit controls are enabled, so you can zoom in and out, rotate in any direction, and pan the camera around the scene. Each ring represents a month which is listed out on the left side of the screen. </li>
          <li>You can click a month to view the movies/series I watched during that month, and unclick to make that month disappear. </li>
          <li>Clicking a month reveals the movies/series watched, clicking again hides them.</li>
          <li>Each movie/series is represented by a planet, and the colors represent the movie’s/series’ color palette. </li>
          <li>The size of each planet represents my rating of that particular movie/series, which is determined by several factors including the storytelling/plot, characters, memorability, and the soundtrack. </li>
          <li>You can listen to my favorite song from the soundtrack by clicking on a movie planet. </li>
          <li>Additional details about the movie/series and audio can be found on the GUI panel on the right side. </li>
          <li>Lastly, if you click on the director view toggle in the GUI, you can watch an animation I made to show which movies/series were directed by a male and which were directed by a female. </li>
        </ul>
        <div style={{ marginBottom: '8%' }}></div>
        <h1>My Process</h1>
        <div style={{ marginBottom: '3%' }}></div>
        <p>
          Over the past couple of months, I started watching a lot more movies and TV shows which is why I chose this to be the topic for my visualization. In the past, I didn’t watch a large variety of genres and I would occasionally watch a movie in theaters or streaming sites if it was highly anticipated, highly rated, or heavily promoted. Towards the beginning of last year, I reconnected with friends online and I was introduced to films that I had never heard of. I quickly realized that there’s a lot more to a film that can be appreciated other than the characters and plot. I decided to explore a wider variety of films on my own and I started noticing the detail in how a scene is filmed, how a single shot is framed, the way the characters are dressed, the color palette and aesthetic of the movie, and the music that plays during and between scenes. I wanted to show some of this through my visualization and I thought an interesting way to do it was with an interactive solar system.
        </p>
        <p>
          I started thinking about ways that I could represent time and my first thought was a varying distance from a center object where the closer you are to the center, the earlier you are in time. A solar system format was perfect for this since the distance of each planet is distinguished by the ring that it’s on. I made a small mood board with some appearance and color scheme inspiration. 
        </p>
        <img src="./images/moodboard.png" alt="Moodboard" />
        <p>
          I thought that it would make sense to represent each month with a different ring and each movie/show I watched with a planet so I drafted a rough layout to see how a solar system would look with multiple planets on one ring.
        </p>
        <img src="./images/process2.png" alt="Process 2" />
        <p>
          I then started my data collection process to see what information I had access to and determine what ways I could represent different types of data given this solar system format. I was able to find all the movies and shows I watched on Netflix from the watch history information. For the other movies and shows, I was able to look through my Letterboxd profile since I started rating everything I watched on that platform. I had access to exact dates from the Netflix data, but I didn’t know the exact dates of the other movies/shows. Fortunately, I was able to piece together the month that I watched each movie and show since I knew if I watched something before or after another movie/show. I decided to categorize the movies/shows only by month, so the exact location of a planet within a ring does not correlate to which part of the month I watched a movie/show. Additionally, I noticed that there were a couple short tv series that I binged in a very short amount of time, which is why I decided to include them in the dataset. 
        </p>
        <p>
          To determine what other information I wanted to display, I thought about some of the properties of my solar system that I could change that may visually convey some meaning without it being too overwhelming. Two properties that stood out to me were the color and size of the planets. I decided that the color of the planet would be best represented by the color palette of the movie/show, and the size would be best represented by my rating of the movie/show. I also wanted to visualize my favorite song from the movie/show’s soundtrack so I decided to make that audio visual represent the “star” or the center object of my solar system. I went through the soundtrack of each movie and chose the most memorable song, or the song that resonated with me the most, and put all of that information into a playlist. I then made a google sheets with all of the information that I wanted to display.
        </p>
        <p>
          After gathering the data, I made a couple sketches on how I wanted the visual to look. Below is one of the final sketches I made.
        </p>
        <img src="./images/process3.png" alt="Process 3" />
        <p>
          Additionally, the Data Feminism paper inspired me to “examine power” in the film space and I decided to look up the directors of the movies and tv shows I watched to see if they were directed by a male or female. I was quite surprised to see that many of the directors were male since many films that I watched were based on a woman’s perspective or had a female lead. In the Data Feminism paper, it mentioned one example in Chapter 3 where there was a data performance in a museum called A Sort of Joy. There was a group of individuals that started naming the artists who had their artwork in the museum in alphabetical order. Their goal was to show how little female artists in the museum there were compared to male artists. At first, the audience didn’t have context to what was happening but once they understood, they started anticipating when the next female artist would be named. Ultimately, the performance was able to evoke a certain type of emotion in the audience where they can feel the gender difference rather than just seeing it. I wanted to include some element of this idea in my visualization, so instead of just showing all the male and female directors at once, I wanted to have an animation that would change the color of the planet to either blue or pink for male or female, and have each one show up one by one. 
        </p>
        <p>
          For my implementation, I knew I wanted to use React Three Fiber since I’ve had experience making websites with this framework. It essentially combines the React.js framework with the Three.js library, so that you can use 3D components in React. I’ve also had experience implementing and using shaders in GLSL, so I used that to create the center audio visualization. I made the vertex shader displace the vertices of my geometry based on the audio frequencies and the fragment shader just makes the geometry white. Below is one of the first iterations with some placeholder data.
        </p>
        <img src="./images/iteration1.png" alt="Iteration 1" />
        <p>
          Each “ring” was created by plotting points using the parametric equation of an ellipse. I was able to print each point to get the location to individually place each planet. The planets are all sphere components and the spheres above have a basic material, so they’re all a solid color. I used the react three drei library to add orbit controls to my scene, so that the user can zoom, rotate, and pan. I continued making adjustments to the scene and tested out a couple shader materials for the spheres. Below is one example shader that I didn’t really like, but you can see the audio visual moving.
        </p>
        <img src="./images/iteration2.png" alt="Iteration 2" />
        <p>
          I created a gradient gradient shader which I preferred the appearance of, however, I realized that shader colors don’t update unless the page is refreshed which would be an issue for the director demographic view that I wanted to implement. Fortunately, I found a gradient material in the drei library and it looked exactly the same as the shader I created, so I used that instead since it didn’t need to refresh to update. I also added a GUI panel using a library called Leva and I was able to start testing the director demographic animation. Below is what the initial version looked like.
        </p>
        <img src="./images/iteration3.png" alt="Iteration 3" />
        <p>
          I continued to edit different features and adjust the visuals until the final result which is what you see on the main page.
        </p>
        <button onClick={goToHomePage}>Go to Visualization  &rarr;</button>
        <div style={{ marginBottom: '20%' }}></div>
      </div>
    </div>
  );
};

export default About;