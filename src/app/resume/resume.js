"use client";

import Nav from "../nav";
import ResumeCard from "./resumeCard";
import Footer from "../footer";
import "../global.css";

export default function Resume() {
  return (
    <>
      <Nav />
      <ResumeCard />
      <Footer />
      <div id="curtain"></div>
    </>
  );
}