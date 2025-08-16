"use client";

import {useState, useEffect} from "react";
import ContacContainer from "./contactContainer";
import Nav from "../nav";
import Footer from "../footer";
import "../global.css";

export default function Contact(){
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
      <ContacContainer/>
      <div id="curtain"></div>
      <Footer/>
    </div>
  );
}