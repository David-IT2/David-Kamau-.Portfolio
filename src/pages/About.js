import React from "react";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import nodejs from "../assets/icons/nodejs.png";
import mysql from "../assets/icons/mysql.png";
import git from "../assets/icons/Git.png";
import github from "../assets/icons/github.png";

function About() {
  const stackIcons = [
    { class: "js", icon: js, title: "JAVASCRIPT", alt: "javascript" },
    { class: "ts", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg", title: "TYPESCRIPT", alt: "typescript" },
    { class: "python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg", title: "PYTHON", alt: "python" },
    { class: "react", icon: react, title: "REACT", alt: "react" },
    { class: "nodejs", icon: nodejs, title: "NODE.JS", alt: "nodejs" },
    { class: "laravel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg", title: "LARAVEL", alt: "laravel" },
    { class: "graphql", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/graphql.svg", title: "GRAPHQL", alt: "graphql" },
    { class: "tailwind", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg", title: "TAILWIND CSS", alt: "tailwind" },
    { class: "mysql", icon: mysql, title: "MYSQL", alt: "mysql" },
    { class: "mongodb", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg", title: "MONGODB", alt: "mongodb" },
    { class: "aws", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg", title: "AWS", alt: "aws" },
    { class: "docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg", title: "DOCKER", alt: "docker" },
    { class: "redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg", title: "REDIS", alt: "redis" },
    { class: "git", icon: git, title: "GIT", alt: "git" },
    { class: "github", icon: github, title: "GITHUB", alt: "github" },
  ];

  return (
    <div>
      <div className="aboutInfo">
        <h1 className="animate__animated animate__backInDown">About</h1>

        <p className="aboutPar1 animate__animated animate__backInRight">
          My name is David Kamau, a Full-Stack Software Developer based in
          Nairobi, Kenya.<br /><br />
          I have hands-on experience building web and mobile applications
          across both frontend and backend, with a focus on developing REST
          and GraphQL APIs, crafting responsive user interfaces, and working
          with databases and cloud services. I bring strong problem-solving
          skills, clear communication, and a collaborative mindset to every
          project, paired with a genuine eye for design and a commitment to
          writing clean, polished code. I'm also a continuous learner,
          always keeping pace with the ever-evolving tech landscape.
        </p>

        <h4 className="animate__animated animate__backInLeft animate__delay-1s">
          Outside of code, I enjoy:
        </h4>
        <ul className="animate__animated animate__backInUp animate__delay-2s">
          <li>Playing NBA 2K when I need a quick break</li>
          <li>
            Losing myself in house music — it helps me focus during long
            coding sessions
          </li>
          <li>Watching movies and sports</li>
          <li>
           Long walks, my favorite way to recharge
          </li>
        </ul>
      </div>

      <div className="myStack animate__animated animate__zoomIn animate__delay-3s">
        <h3>Technologies & Tools</h3>
        <ul className="aboutIcons">
          {stackIcons.map((item, index) => (
            <li key={index} className={`listJs ${item.class}`}>
              <span>
                <img src={item.icon} alt={item.alt} />
              </span>{" "}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;