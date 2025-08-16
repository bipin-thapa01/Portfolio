"use client";

import {useState, useEffect} from "react";
import Nav from "../nav";
import ResumeContainer from "./ResumeContainer";
import Footer from "../footer";
import "../global.css";

export default function Resume() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    setIsLoaded(true);
  },[])

  if(!isLoaded){
    return <div className="loading-bg">
      Loading. Be Patient...
    </div>
  }

  return (
    <>
      <Nav />
      <ResumeContainer />
      <Footer />
      <div id="curtain"></div>
    </>
  );
}