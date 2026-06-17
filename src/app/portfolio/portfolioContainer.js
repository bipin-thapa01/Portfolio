"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./portfolio.css";

export default function PortfolioContainer() {
  const router = useRouter();

  const projects = [
    {
      title: "Subcryption",
      url: "https://subcryption.vercel.app",
      type: "web",
      imgUrl: "/subcryption.png",
    },
    {
      title: "Edution",
      url: "https://edution-frontend.vercel.app/",
      type: "web",
      imgUrl: "/edution.png",
    },
    {
      title: "Quiz",
      url: "https://github.com/bipin-thapa01/Quiz-using-RNN",
      type: "ai",
      imgUrl: "/quiz.jpg",
    },
    {
      title: "Finger Detection(Basic)",
      url: "https://github.com/bipin-thapa01/Finger-Detection-Model",
      type: "ai",
      imgUrl: "/fingers.jpg",
    },
    {
      title: "Bridge Quality Index",
      url: "https://github.com/bipin-thapa01/Bridge-Quality-Index-AI-Model",
      type: "ai",
      imgUrl: "/bridges.jpg",
    },
    {
      title: "Birthday Calc",
      url: "https://birthcalcz.netlify.app/",
      type: "web",
      imgUrl: "/birthCalc.png",
    },
    {
      title: "Password Generator",
      url: "https://bipin-thapa01.github.io/Password-Generator/",
      type: "web",
      imgUrl: "/passGen.png",
    },
    {
      title: "Memory Game",
      url: "https://bipin-thapa01.github.io/Memory-Game/",
      type: "web",
      imgUrl: "/memoryGame.png",
    },
    {
      title: "Arise- Fitness App",
      url: "https://github.com/bipin-thapa01/Arise",
      type: "app",
      imgUrl: "/arise.png",
    },
    {
      title: "Mero Note",
      url: "https://mero-note.netlify.app/",
      type: "web",
      imgUrl: "/meroNote.png",
    },
  ];

  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.type === active);

  return (
    <div className="main-container">
      <h2 className="title">My Projects</h2>

      <div className="filter-bar">
        {["all", "web", "app", "ai"].map((item) => (
          <button
            key={item}
            className={`filter-btn ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => router.push(project.url)}
          >
            <Image
              src={project.imgUrl}
              alt={project.title}
              width={500}
              height={500}
              className="img"
            />

            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.type.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}