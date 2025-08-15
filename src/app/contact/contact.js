"use client";

import ContacContainer from "./contactContainer";
import Nav from "../nav";
import Footer from "../footer";
import "../global.css";

export default function Contact(){
  return(
    <div className="main-bg">
      <Nav/>
      <ContacContainer/>
      <div id="curtain"></div>
      <Footer/>
    </div>
  );
}