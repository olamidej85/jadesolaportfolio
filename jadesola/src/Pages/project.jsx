import React from "react";

const projects = [
  {
    title: "E-commerce Storefront",
    description:
      "A fully responsive e-commerce platform with product listings, shopping cart, and checkout functionality.",
    img: "/images/finds.png",
    live: "https://jayde-finds.vercel.app/",
    source: "https://github.com/olamidej85/jayde_finds",
  },
  {
    title: "Movie Streaming Platform",
    description:
      "A Netflix-inspired web app built html and css,featuring a sleek user interface and responsive movie listings. It replicates Netflix’s homepage layout and design.",
    img: "/images/net.png",
    live: "https://sprinkles-b.netlify.app/",
    source: "https://github.com/olamidej85/NetflixC",
  },
  {
    title: "Fitness Club Website",
    description:
      "A responsive gym website designed with React and CSS, featuring modern layouts, workout programs, membership details, and contact sections to promote fitness and wellness services.",
    img: "/images/kmt.png",
    live: "https://kmtyoga.netlify.app/",
    source: "https://github.com/olamidej85/YOGA-L-P",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather application that displays real-time weather data and forecasts for any city. Built with React and integrated with a weather API to provide temperature, humidity, and condition updates.",
    img: "/images/weather2.png",
    live: "https://jayde-app.netlify.app/",
    source: "https://github.com/olamidej85/jayde-second-project/tree/main",
  },
  {
    title: "Landing Page",
    description:
      "A front-end landing page designed with HTML and CSS, highlighting component reusability, responsive layouts, and a visually appealing design optimized for conversions.",
    img: "/images/land.png",
    live: "https://jay-page.netlify.app/#",
    source: "https://github.com/olamidej85/landing-page",
  },
  {
    title: "React Weather App",
    description:
      "A dynamic weather app built with React and OpenWeather API, featuring live forecasts, responsive design, and location-based weather data.",
    img: "/images/weather1.png",
    live: "https://jay-weather.netlify.app/",
    source: "https://github.com/olamidej85/jayde-final-project",
  },
  {
    title: "Newsletter Signup",
    description:
      "A simple and stylish newsletter form for collecting user emails with instant feedback after submission.",
    img: "/images/news.png",
    live: "https://jay-newsletter.netlify.app/#/",
    source: "https://github.com/olamidej85/my-newsletter",
  },
];

function Project() {
  return (
    <section className="projects">
        <section id="project"></section>
      <div className="container">
        <div className="text-center">
          <h2>Featured Projects</h2>
          <p>A selection of my best work, showcasing my skills in front-end development.</p>
        </div>

        <div className="project-grid">
          {projects.map((p, index) => (
            <div className="project-card" key={index}>
              <div
                className="project-img"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <div className="overlay">
                  <a href={p.live} className="btn light" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={p.source} className="btn dark" target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
