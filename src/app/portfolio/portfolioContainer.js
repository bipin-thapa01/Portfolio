"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import birthCalc from "../../../public/birthCalc.png";
import "../global.css";
import "./portfolio.css";

export default function PortfolioContainer(){

  const [allProjects, setAllProjects] = useState(null);
  const [webProjects, setWebProjects] = useState(null);
  const [pythonProjects, setPythonProjects] = useState(null);
  const [bitProjects, setBitProjects] = useState(null);

  const projects = {
    hackfest: {
      url: "https://kist-hackfest2025.vercel.app/",
      type: "bit",
      imgUrl: "",
    },
    birthcalc: {
      url: "https://birthcalcz.netlify.app/",
      type: "web"
    },
    note: {
      url: "https://mero-note.netlify.app/",
      type: "web"
    },
    passGen: {
      url: "https://bipin-thapa01.github.io/Password-Generator/",
      type: "web"
    },
    memoryGame: {
      url: "https://bipin-thapa01.github.io/Memory-Game/index.html",
      type: "web"
    },
    kistWebsite: {
      url: "https://bipin-thapa01.github.io/Memory-Game/index.html",
      type: "web"
    },
    textEditor: {
      url: "https://github.com/bipin-thapa01/Python",
      type: "python"
    },
  };

  useEffect(() => {
    setAllProjects(document.getElementById("all"));
    setWebProjects(document.getElementById("web"));
    setPythonProjects(document.getElementById("py"));
    setBitProjects(document.getElementById("bit"));
  }, []);

  const all = () =>{
    allProjects.style.backgroundColor = "gray";
    allProjects.style.color = "black";
    webProjects.style.backgroundColor = "inherit";
    webProjects.style.color = "inherit";
    pythonProjects.style.backgroundColor = "inherit";
    pythonProjects.style.color = "inherit";
    bitProjects.style.backgroundColor = "inherit";
    bitProjects.style.color = "inherit";

    
  }

  const web = () =>{
    allProjects.style.backgroundColor = "inherit";
    allProjects.style.color = "inherit";
    webProjects.style.backgroundColor = "nhey";
    webProjects.style.color = "black";
    pythonProjects.style.backgroundColor = "inherit";
    pythonProjects.style.color = "inherit";
    bitProjects.style.backgroundColor = "inherit";
    bitProjects.style.color = "inherit";
  }

  const py = () =>{
    allProjects.style.backgroundColor = "inherit";
    allProjects.style.color = "inherit";
    webProjects.style.backgroundColor = "inherit";
    webProjects.style.color = "inherit";
    pythonProjects.style.backgroundColor = "gray";
    pythonProjects.style.color = "black";
    bitProjects.style.backgroundColor = "inherit";
    bitProjects.style.color = "inherit";
  }

  const bit = () =>{
    allProjects.style.backgroundColor = "inherit";
    allProjects.style.color = "inherit";
    webProjects.style.backgroundColor = "inherit";
    webProjects.style.color = "inherit";
    pythonProjects.style.backgroundColor = "inherit";
    pythonProjects.style.color = "inherit";
    bitProjects.style.backgroundColor = "gray";
    bitProjects.style.color = "black";
  }

  return(
    <div className="main-container">
      <h3>
        My Projects
      </h3>
      <div className="projects-container-container">
        <div className="projects-categories">
          <div id="all" onClick={all}>All Projects</div>
          <div id="web" onClick={web}>Web Projects</div>
          <div id="py" onClick={py}>Python Projects</div>
          <div id="bit" onClick={bit}>BIT Projects</div>
        </div>
        <div className="projects-container">
          <div className="card">
            <Image alt="Project Image"
            src={birthCalc} width={500} height={500}/>
          </div>
        </div>
      </div>
    </div>
  );
}