"use client";

import "./dataCardContainer.css";
import "./resumeCard.css";

export default function ResumeCard() {
  return (
    <div className="main-container-sub">
      <h3>MY RESUME</h3>

      <div className="data-card-container">
        <div className="main-title">Work Experiences</div>

        <div className="row left">
          <div className="card">
            <div className="date">2022 - Present</div>
            <div className="card-title">Full Stack Web Developer</div>
            <div className="card-description">
              I have been a full stack developer since 2022 A.D and am self employed. I have developed multiple dynamic websites and will continue to do so.
            </div>
          </div>
        </div>

        <div className="row right">
          <div className="card">
            <div className="date">2023 - Present</div>
            <div className="card-title">Data Scientist</div>
            <div className="card-description">
              I am currently learning data science. Artificial Intelligence and machine learning has been my main field of interest and have developed few projects regarding this field using Python.
            </div>
          </div>
        </div>

        <div className="row left">
          <div className="card">
            <div className="date">2024 - Present</div>
            <div className="card-title">Coding Tutor</div>
            <div className="card-description">
              I have been teaching how to code since 2024 A.D. My teaching career started when I taught my friends basic concept related to Maths. Since then I have taught multiple batches of +2 students python programming.
            </div>
          </div>
        </div>

        <div className="row right">
          <div className="card">
            <div className="date">2024 - Present</div>
            <div className="card-title">Event Organizer</div>
            <div className="card-description">
              Me, alongside my friends, has hosted multiple events through out our college life. Some of the main examples are: Intra +2 Code War, Intra College Hackfest, Intra College Code War.
            </div>
          </div>
        </div>
      </div>

      <div className="data-card-container">
        <div className="main-title">Education</div>

        <div className="row left">
          <div className="card">
            <div className="date">2021 - 2022</div>
            <div className="card-title">+2 in Science</div>
            <div className="card-description">
              I did +2 in science with computer science as my major. I studied at Kathmandu Bernhardt College, Balkhu. I was able to secure 3.88 GPA in my 12 board exam.
            </div>
          </div>
        </div>

        <div className="row right">
          <div className="card">
            <div className="date">2023 - Present</div>
            <div className="card-title">B.I.T</div>
            <div className="card-description">
              I am currently studying Bachelors of Information Technology (B.I.T) in KIST College, Kamalpokhari.
            </div>
          </div>
        </div>

        <div className="row left">
          <div className="card">
            <div className="date">2023 - Present</div>
            <div className="card-title">Web Development</div>
            <div className="card-description">
              I have been learning web development using React, Next.js, Node.js, Express, Spring Boot and MySQL.
            </div>
          </div>
        </div>

        <div className="row right">
          <div className="card">
            <div className="date">2025 - Present</div>
            <div className="card-title">Machine Learning</div>
            <div className="card-description">
              I am focusing on machine learning using Python after web development experience.
            </div>
          </div>
        </div>

        <div className="row left">
          <div className="card">
            <div className="date">2025 - Present</div>
            <div className="card-title">Flutter App Dev</div>
            <div className="card-description">
              Started learning Flutter and Dart in 2025 A.D.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}