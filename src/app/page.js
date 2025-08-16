"use client";

import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Nav from "./nav";
import Footer from "./footer";
import "./global.css";

export default function Page(){
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
      <HomePage/>
      <Footer/>
      <div id="curtain"></div>
    </div>
  );
}