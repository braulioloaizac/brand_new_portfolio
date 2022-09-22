import React from "react";

export default function Resume() {
  return (
    <div className="content">
      <h2>Resume</h2>
      <p>Download my <a href="/">Resume</a></p>
      <div>
        <h3>Front-end Habilities</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
        </ul>
        <h3>Back-end Habilities</h3>
        <ul>
          <li>APIs</li>
          <li>REST APIs</li>
          <li>Nodejs</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
