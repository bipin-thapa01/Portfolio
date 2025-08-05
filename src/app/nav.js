"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "./homepage.css";
import "./global.css";

export default function Nav() {

  useEffect(() => {
    const defineIcon = async () => {
      const burger = await document.getElementById('burger');
      const cross = await document.getElementById('cross');
      const options = await document.getElementById('noc');
      const curtain = await document.getElementById('curtain')

      burger.addEventListener('click', () => {
        burger.style.display = 'none';
        cross.style.display = 'block';
        options.style.display = 'flex';
        curtain.style.display = 'block';
      });
      cross.addEventListener('click', () => {
        burger.style.display = 'block';
        cross.style.display = 'none';
        options.style.display = 'none';
        curtain.style.display = 'none';
      });
    }

    const home = document.getElementById('home-option');
    const resume = document.getElementById('resume-option');
    const portfolio = document.getElementById('portfolio-option');
    const contact = document.getElementById('contact-option');

    const pageLink = window.location.href;
    const splitLink = pageLink.split('/');
    if(splitLink[splitLink.length - 1] === ""){
      home.style.textDecoration = 'line-through';
      home.style.color = 'purple';
      resume.style.textDecoration = 'none';
      resume.style.color = 'white';
      portfolio.style.textDecoration = 'none';
      portfolio.style.color = 'white';
      contact.style.textDecoration = 'none';
      contact.style.color = 'white';
    }
    else if(splitLink[splitLink.length - 1] === "resume"){
      home.style.textDecoration = 'none';
      home.style.color = 'white';
      resume.style.textDecoration = 'line-through';
      resume.style.color = 'purple';
      portfolio.style.textDecoration = 'none';
      portfolio.style.color = 'white';
      contact.style.textDecoration = 'none';
      contact.style.color = 'white';
    }
    else if(splitLink[splitLink.length - 1] === "portfolio"){
      home.style.textDecoration = 'none';
      home.style.color = 'white';
      resume.style.textDecoration = 'none';
      resume.style.color = 'white';
      portfolio.style.textDecoration = 'line-through';
      portfolio.style.color = 'purple';
      contact.style.textDecoration = 'none';
      contact.style.color = 'white';
    }
    else if(splitLink[splitLink.length - 1] === "contact"){
      home.style.textDecoration = 'none';
      home.style.color = 'white';
      resume.style.textDecoration = 'none';
      resume.style.color = 'white';
      portfolio.style.textDecoration = 'none';
      portfolio.style.color = 'white';
      contact.style.textDecoration = 'line-through';
      contact.style.color = 'purple';
    }

    defineIcon();
  }, []);

  const router = useRouter();

  return (
    <div className="nav">
      <div className="nav-icon-container" id="burger">
        <RxHamburgerMenu className="nav-icon" />
      </div>
      <div className="nav-icon-container" id="cross">
        <RxCross2 className='nav-icon'/>
      </div>
      <div className='nav-options-container' id='noc'>
        <div id='home-option' onClick={()=> router.push("/")}>Home</div>
        <div id='resume-option' onClick={()=> router.push("/resume")}>Resume</div>
        <div id='portfolio-option' onClick={()=> router.push("/portfolio")}>Portfolio</div>
        <div id='contact-option' onClick={()=> router.push("/contact")}>Contact</div>
      </div>
    </div>
  );
}