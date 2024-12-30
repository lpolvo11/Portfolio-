import React, { useEffect } from "react";
import "../styles/Projects.css";
import todolist from "../images/todolist.jpg";
import movieapp from "../images/movie.png";
import rickandmorty from "../images/rickandmorty.jpg";
import joke from "../images/joke.png";
import calc from "../images/calc.png";
import py from "../images/pydownload.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  const projects = [
    {
      title: "Todo List",
      imageUrl: todolist,
      link: "https://github.com/lpolvo11/to-do-list",
    },
    {
      title: "Movie App",
      imageUrl: movieapp,
      link: "https://github.com/lpolvo11/advanced-movie-app",
    },
    {
      title: "Rick and Morty App",
      imageUrl: rickandmorty,
      link: "https://github.com/lpolvo11/rickAndMorty_project",
    },
    {
      title: "Calculator web app",
      imageUrl: calc,
      link: "https://github.com/lpolvo11/calculator-web-app",
    },
    {
      title: "Joke generator",
      imageUrl: joke,
      link: "https://github.com/lpolvo11/Joke-generator",
    },
    {
      title: "Python Video Downloader",
      imageUrl: py,
      link: "https://github.com/lpolvo11/weather-bot-reddit ",
    },
  ];

  return (
    <div data-aos="fade-up" className="my-projects">
      <h1 className="title">My projects</h1>
      <div className="section-project">
        <section className="section">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <h2 className="project-title">{project.title}</h2>
                <img
                  className="img"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <a href={project.link} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Projects;
