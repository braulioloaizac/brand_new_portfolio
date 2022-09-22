import React from 'react';
import picture from "../../images/profile.png";

export default function About() {
  return (
    <div className='content'>
      <h2>About Me</h2>
      <img src={picture} alt="Logo" className="profilepic" />
      <p>
        Hi, Braulio here, I'm an electronics engineer and a software developer that loves fantasy tales, videogames, comics, music, cooking and seek the unknown since I was a child. <br>
        </br>
        Born in Summit, New Jersey and rised in Colombia, I came to this country almost a year ago in pursuit of my dreams, and I think that i'm going to be here for a the rest of my life, 
        learning a lot and making new experiences.
      </p>
    </div>
  );
}