"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../global.css";
import "./portfolio.css";

export default function PortfolioContainer() {

  const router = useRouter();

  const [allProjects, setAllProjects] = useState(null);
  const [webProjects, setWebProjects] = useState(null);
  const [pythonProjects, setPythonProjects] = useState(null);
  const [bitProjects, setBitProjects] = useState(null);
  const [cardCollection, setCardCollection] = useState(null);

  const projects = {
    subcryption:{
      title: "Subcryption",
      url: "https://subcryption.vercel.app",
      type: "web",
      imgUrl: "/subcryption.png",
    },
    subcryptionBackend:{
      title: "Subcryption Backend",
      url: "https://github.com/bipin-thapa01/Subcryption-Backend",
      type: "web",
      imgUrl: "/subcryptionBackend.png",
    }
    ,
    hackfest: {
      title: "HackFest",
      url: "https://kist-hackfest2025.vercel.app/",
      type: "bit",
      imgUrl: "/hackfest.png",
    },
    birthcalc: {
      title: "Birthday Calculation",
      url: "https://birthcalcz.netlify.app/",
      type: "web",
      imgUrl: "/birthCalc.png",
    },
    note: {
      title: "Mero Note",
      url: "https://mero-note.netlify.app/",
      type: "web",
      imgUrl: "/meroNote.png",
    },
    passGen: {
      title: "Password Generator",
      url: "https://bipin-thapa01.github.io/Password-Generator/",
      type: "web",
      imgUrl: "/passGen.png",
    },
    memoryGame: {
      title: "Memory Game",
      url: "https://bipin-thapa01.github.io/Memory-Game/index.html",
      type: "web",
      imgUrl: "/memoryGame.png",
    },
    kistWebsite: {
      title: "KIST Website",
      url: "https://bipin-thapa01.github.io/Memory-Game/index.html",
      type: "web",
      imgUrl: "/kistWeb.png",
    },
    textEditor: {
      title: "Text Editor",
      url: "https://github.com/bipin-thapa01/Python",
      type: "python",
      imgUrl: "/textEditor.png",
    },
    kistFair2025 :{
      title: "Kist Fair 2025",
      url: "https://github.com/bipin-thapa01/kist-fair-2025-",
      type: "bit",
      imgUrl: "/fair2025.png"
    },
  };

  const filterContent = (category) => {
    const allowedCategory = (category === "all" ? ["web", "bit", "python"] : [category]);
    setCardCollection(
      Object.entries(projects).filter((item) => allowedCategory.includes(item[1].type)).map((item, index) => {
        return <div className="card" id={`card${index}`} key={index} onMouseEnter={(e) => {
          mouseEnter(e);
        }}
        onMouseLeave={(e) => {
          mouseLeave(e);
        }}
        onTouchStart={(e)=>{
          mouseEnter(e);
        }}
        onTouchEnd={(e)=>{
          mouseLeave(e);
        }}
        onClick={()=>{
          router.push(item[1].url);
        }}
        >
          <Image alt="Project Image" className="card-image"
            src={item[1].imgUrl} width={500} height={500} />
          <div className="card-curtain"></div>
          <div className="card-info">
            <div className="card-title">
              {item[1].title.toUpperCase()}
            </div>
            <div className="card-type">
              {item[1].type.toUpperCase()}
            </div>
          </div>
        </div>
      })
    );
  }

  useEffect(() => {
    setAllProjects(document.getElementById("all"));
    setWebProjects(document.getElementById("web"));
    setPythonProjects(document.getElementById("py"));
    setBitProjects(document.getElementById("bit"));
    filterContent("all");
  }, []);

  const mouseEnter = (e) => {
    const targetCurtain = e.currentTarget.querySelector(".card-curtain");
    const targetCardInfo = e.currentTarget.querySelector(".card-info");
    targetCurtain.style.display = "block";
    targetCardInfo.style.display = "flex";
  }

  const mouseLeave = (e) => {
    const targetCurtain = e.currentTarget.querySelector(".card-curtain");
    const targetCardInfo = e.currentTarget.querySelector(".card-info");
    targetCurtain.style.display = "none";
    targetCardInfo.style.display = "none";
  }

  const all = () => {
    allProjects.style.backgroundColor = "gray";
    allProjects.style.color = "black";
    webProjects.style.backgroundColor = "inherit";
    webProjects.style.color = "inherit";
    pythonProjects.style.backgroundColor = "inherit";
    pythonProjects.style.color = "inherit";
    bitProjects.style.backgroundColor = "inherit";
    bitProjects.style.color = "inherit";
    filterContent("all");
  }

  const web = () => {
    allProjects.style.backgroundColor = "inherit";
    allProjects.style.color = "inherit";
    webProjects.style.backgroundColor = "gray";
    webProjects.style.color = "black";
    pythonProjects.style.backgroundColor = "inherit";
    pythonProjects.style.color = "inherit";
    bitProjects.style.backgroundColor = "inherit";
    bitProjects.style.color = "inherit";
    filterContent("web");
  }

  const py = () => {
    allProjects.style.backgroundColor = "inherit";
    allProjects.style.color = "inherit";
    webProjects.style.backgroundColor = "inherit";
    webProjects.style.color = "inherit";
    pythonProjects.style.backgroundColor = "gray";
    pythonProjects.style.color = "black";
    bitProjects.style.backgroundColor = "inherit";
    bitProjects.style.color = "inherit";
    filterContent("python");
  }

  const bit = () => {
    allProjects.style.backgroundColor = "inherit";
    allProjects.style.color = "inherit";
    webProjects.style.backgroundColor = "inherit";
    webProjects.style.color = "inherit";
    pythonProjects.style.backgroundColor = "inherit";
    pythonProjects.style.color = "inherit";
    bitProjects.style.backgroundColor = "gray";
    bitProjects.style.color = "black";
    filterContent("bit");
  }

  return (
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
          {cardCollection}
        </div>
      </div>
    </div>
  );
}