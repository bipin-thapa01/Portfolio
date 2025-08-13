"use client";

import PortfolioContainer from "./portfolioContainer";
import Nav from "../nav";
import Footer from "../footer";
import "../global.css";

export default function Portfolio(){
  return(
    <div className="main-bg">
      <Nav/>
      <PortfolioContainer/>
      <div id="curtain"></div>
      <Footer/>
    </div>
  );
}