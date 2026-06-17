"use client";
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "./homepage.css";
import "./global.css";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  // attach the open/close click handlers once
  useEffect(() => {
    const burger = document.getElementById('burger');
    const cross = document.getElementById('cross');
    const options = document.getElementById('noc');
    const curtain = document.getElementById('curtain');

    const openMenu = () => {
      burger.style.display = 'none';
      cross.style.display = 'block';
      options.style.display = 'flex';
      curtain.style.display = 'block';
    };
    const closeMenu = () => {
      burger.style.display = 'block';
      cross.style.display = 'none';
      options.style.display = 'none';
      curtain.style.display = 'none';
    };

    burger.addEventListener('click', openMenu);
    cross.addEventListener('click', closeMenu);

    return () => {
      burger.removeEventListener('click', openMenu);
      cross.removeEventListener('click', closeMenu);
    };
  }, []);

  // reset menu + curtain, and update the active link, on every route change
  useEffect(() => {
    const burger = document.getElementById('burger');
    const cross = document.getElementById('cross');
    const options = document.getElementById('noc');
    const curtain = document.getElementById('curtain');
    if (burger) burger.style.display = 'block';
    if (cross) cross.style.display = 'none';
    if (options) options.style.display = 'none';
    if (curtain) curtain.style.display = 'none';

    const links = {
      '/': document.getElementById('home-option'),
      '/resume': document.getElementById('resume-option'),
      '/portfolio': document.getElementById('portfolio-option'),
      '/contact': document.getElementById('contact-option'),
    };
    Object.entries(links).forEach(([path, el]) => {
      if (!el) return;
      if (path === pathname) {
        el.style.textDecoration = 'line-through';
        el.style.color = 'purple';
      } else {
        el.style.textDecoration = 'none';
        el.style.color = 'white';
      }
    });
  }, [pathname]);

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