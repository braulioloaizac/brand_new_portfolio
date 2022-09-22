import React, { useState } from "react";

export default function Portfolio() {
  const [projects] = useState([
    {
      name: "Watch It Later",
      tech: "Nodejs/Express/Javascript/REST/MySQL/Sequelize/HTML/BulmaCSS/",
      link: "https://github.com/cnohilly/watch-it-later",
    },
    {
      name: "Excelsior (Music Finder)",
      tech: "Javascript/APIs/HTML/TailwindCSS/",
      link: "https://github.com/braulioloaizac/music-finder-live",
    },
    {
      name: "Ultimate Tech Blog",
      tech: "Nodejs/Express/Javascript/REST/MySQL/Sequelize/HTML/Bootstrap/Handlebars",
      link: "https://github.com/braulioloaizac/ultimatetech-blog",
    },
    {
      name: "Note Taker",
      tech: "Nodejs/Express/JSON/Javascript/HTML/Bootstrap",
      link: "https://github.com/braulioloaizac/takernoteapp",
    },
    {
      name: "Forecast App",
      tech: "Javascript/jQuery/APIs/HTML/CSS",
      link: "https://github.com/braulioloaizac/forecast-app",
    },
    {
      name: "Work Day Scheduler",
      tech: "Javascript/HTML/Bootstrap",
      link: "https://github.com/braulioloaizac/work-day-scheduler/",
    },
  ]);

  return (
    <div className="content">
      <h2>Portfolio</h2>
      <div className="flex-row">
        {projects.map((project, i) => (
          <img
            src={require(`../../images/${i + 1}.png`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
}
