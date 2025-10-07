import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-section">
      <section id="about"> ... </section>
      <div className="skills-container">
        <div className="skill-card">
          <img src="images/html.webp" alt="HTML" />
          <p>HTML</p>
        </div>
         <div className="skill-card">
          <img src="images/css2.jpg" alt="css" />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <img src="images/java.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
         <div className="skill-card">
          <img src="images/react.png" alt="React" />
          <p>React</p>
        </div>
         <div className="skill-card">
          <img src="images/Bootstrap.png" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
         <div className="skill-card">
          <img src="images/Tailwind.png" alt="TAILWIND" />
          <p>Tailwind</p>
        </div>
        <div className="skill-card">
          <img src="images/git.svg" alt="GIT" />
          <p>GIT</p>
        </div>
        <div className="skill-card">
          <img src="images/GitHub.png" alt="GitHub" />
          <p>GitHub</p>
        </div>
      </div>

      <div className="about-text">
        <h2>What You Need To Know</h2>
        <p>
         I’m a passionate Front-End Developer based in Nigeria, with a background in Electrical 
         and Power Engineering. Combining technical expertise with creativity, I design and build 
         visually stunning, high-performing, and responsive websites that deliver great user 
         experiences. Skilled in HTML, CSS, JavaScript, Bootstrap, and React, I focus on turning 
         ideas into functional and user-friendly solutions that help businesses and individuals
          establish a strong online presence.Beyond coding, I enjoy exploring new technologies,
           solving problems, and refining my skills to stay ahead of industry trends. My goal is 
           to continue growing as a developer, merging my engineering background with web 
           development to create meaningful and impactful digital solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
