"use client";

import Image from 'next/image';
import profile from '../../public/profile.jpg'
import Wdid from './wdid';
import Slider from './slider';
import { useState, useEffect } from 'react';
import "./global.css";
import "./homepage.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

export default function HomePage() {

  const [myInfo, updateMyInfo] = useState({});
  const [description, updateDescription] = useState("")

  useEffect(() => {
    const data = {
      dob: '04.08.2005',
      contact: '+977 974-2549312',
      mail: 'yukichin638@gmail.com',
      address: 'Satungal, Kathmandu',
    };
    updateMyInfo(data);

    const desc = "I’m really passionate about technology, especially in areas like AI, web development, and data science. I love creating websites and applications that are both useful and easy to use, while also diving into data to find meaningful insights. Exploring how artificial intelligence can solve real problems excites me the most. I’m always eager to learn new things and improve my skills so I can build smarter and better solutions every day.";

    updateDescription(desc);

    const words = ["Developer", "Researcher", "Student"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const el = document.getElementById("typing-text");

    const type = () => {
      const currentWord = words[wordIndex];
      const isWordComplete = !isDeleting && charIndex === currentWord.length;
      const isWordGone = isDeleting && charIndex === 0;

      if (isWordComplete) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, 1000);
        return;
      }

      if (isWordGone) {
        wordIndex = (wordIndex + 1) % words.length;
        isDeleting = false;
      }

      el.textContent = currentWord.substring(0, charIndex + (isDeleting ? -1 : 1));
      charIndex += isDeleting ? -1 : 1;

      timeoutId = setTimeout(type, isDeleting ? 40 : 80);
    };

    if (el) type();

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className="main-container">
      <div className="main-intro-container">
        <Image
          src={profile}
          alt="Logo"
          className='profile-image'
          width={320}
          height={450}
          priority
        />
        <div className='intro-container'>
          <div>
            <div>
              Hello Everyone  👇
            </div>
            <div className='intro-name'>
              <div>
                I'm <span className='gradient-text'>Bipin Thapa</span>
              </div>
              <div>
                I am a
                <span className="container">
                  <span className="text gradient-text" id="typing-text"></span>
                </span>

              </div>
            </div>
          </div>
          <div className='dynamic-details'>
            <div>
              <FaCalendarAlt className='special-icon' />
              <span>{myInfo['dob']}</span>
            </div>
            <div>
              <IoIosCall className='special-icon' />
              <span>{myInfo['contact']}</span>
            </div>
            <div>
              <CiMail className='special-icon' />
              <span>{myInfo['mail']}</span>
            </div>
            <div>
              <FaLocationDot className='special-icon' />
              <span>{myInfo['address']}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='description'>
        {description}
      </div>
      <Wdid/>
      <Slider/>
    </div>
  );
}