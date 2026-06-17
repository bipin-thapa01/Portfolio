"use client";

import { useState } from "react";
import "./dataCardContainer.css";
import "./resumeCard.css";

export default function ResumeCard() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('/data.json');
  //     const json = await res.json();
  //     setData(json);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="main-container-sub">
      <h3>
        MY RESUME
      </h3>
      <div className="data-card-container">
        <div className="main-title">
          Work Experiences
        </div>
        <div
          className="card left"
        >
          <div className="date">
            2022 - Present
          </div>
          <div className="title">
            Full Stack Web Developer
          </div>
          <div className="card-description">
            I have been a full stack developer since 2022 A.D and am self employed. I have developed multiple dynamic websites and will continue to do so.
          </div>
        </div>

        <div
          className="card right"
        >
          <div className="date">
            2023 - Present
          </div>
          <div className="title">
            Data Scientist
          </div>
          <div className="card-description">
            I am currently learning data science. Artificial Intelligence and machine learning has been my main field of interest and have developed few projects regarding this field using Python.
          </div>
        </div>

        <div
          className="card left"
        >
          <div className="date">
            2024 - Present
          </div>
          <div className="title">
            Coding Tutor
          </div>
          <div className="card-description">
            I have been teaching how to code since 2024 A.D. My teaching career started when I taught my friends basic concept related to maths
          </div>
        </div>

        <div
          className="card right"
        >
          <div className="date">
            2024 - Present
          </div>
          <div className="title">
            Event Organizer
          </div>
          <div className="card-description">
            Me, alongside my friends, has hosted muliple events through out our college life. Some of the main examples are: Intra +2 Code War, Intra College Hackfest.
          </div>
        </div>
      </div>

      <div className="data-card-container">
        <div className="main-title">
          Education
        </div>
        <div
          className="card left"
        >
          <div className="date">
            2021 - 2022
          </div>
          <div className="title">
            +2 in Science
          </div>
          <div className="card-description">
            I did +2 in science with computer science as my major. I studied at Kathmandu Bernhardt College, Balkhu. I was able to secure 3.88 GPA in my 12 board exam.
          </div>
        </div>

        <div
          className="card right"
        >
          <div className="date">
            2023 - Present
          </div>
          <div className="title">
            Bachelors of Information Technology
          </div>
          <div className="card-description">
            I am currently studying Bachelors of Information Technology (B.I.T) in KIST College, Kamalpokhari.
          </div>
        </div>

        <div
          className="card left"
        >
          <div className="date">
            2023 - Present
          </div>
          <div className="title">
            Web Development
          </div>
          <div className="card-description">
            I have been learning how to develop websites and other stuffs related to web development since 2023. My current stack are forntend: JS with React and Next.js, backend with Node.js, Express, SpringBoot and database with MySQL.
          </div>
        </div>

        <div
          className="card right"
        >
          <div className="date">
            2025 - Present
          </div>
          <div className="title">
            Machine Learning
          </div>
          <div className="card-description">
            I started learning Python on 2023 but dropped it to learn web development. After having a but of experience on web devlopemnt now I am shifting my focus toward machine learning through Python. I have learned machine learning
          </div>
        </div>

        <div
          className="card left"
        >
          <div className="date">
            2025 - Present
          </div>
          <div className="title">
            App Developemnt (Flutter)
          </div>
          <div className="card-description">
            Started learning flutter and dart in 2025 A.D and have been developing app and having fun since then.
          </div>
        </div>
      </div>
    </div>
  );
}