"use client";

import HomePage from "./HomePage";
import Nav from "./nav";
import Footer from "./footer";
import "./global.css";

export default function Page(){
  return(
    <div className="main-bg">
      <Nav/>
      <HomePage/>
      <Footer/>
      <div id="curtain"></div>
    </div>
  );
}