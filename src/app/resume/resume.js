"use client";

import Nav from "../nav";
import ResumeContainer from "./ResumeContainer";
import Footer from "../footer";
import "../global.css";

export default function Resume() {
  return (
    <>
      <Nav />
      <ResumeContainer />
      <Footer />
      <div id="curtain"></div>
    </>
  );
}