"use client";

import { useState, useEffect } from "react";
import PortfolioContainer from "./portfolioContainer";
import Nav from "../nav";
import Footer from "../footer";
import "../global.css";

export default function Portfolio(){
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    setIsLoaded(true);
  },[])

  if(!isLoaded){
    return <div className="loading-bg">
      Loading. Be Patient...
    </div>
  }

  return(
    <div className="main-bg">
      <Nav/>
      <PortfolioContainer/>
      <div id="curtain"></div>
      <Footer/>
    </div>
  );
}