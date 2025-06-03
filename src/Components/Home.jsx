import React, { useEffect, useState } from 'react';
import Buttonn from './Button';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import Cards from './Cards';
import ProjectHome from './ProjectHome';
import AllCards from './AllCards';
export default function Home() {
  const spantext = [
    "Web Developer",
    "DevOps Engineer",
    "UI/UX Designer",
    "React Developer",
    "Full Stack Developer",
  ];

  const [displayedText, setDisplayedText] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fullText = spantext[textIndex];
    let charIndex = -1;

    // Typing effect
    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length-1) {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        charIndex++;
        
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsFading(true); // Start fade out after typing is done
        }, 1000); // Wait for a second before starting fade out
      }
    }, 150); // Type speed

    return () => clearInterval(typeInterval); // Cleanup on component unmount
  }, [textIndex]); // Only re-run when textIndex changes

  useEffect(() => {
    if (isFading) {
      const fadeOut = setTimeout(() => {
        setDisplayedText(""); // Clear text for fade out
        setIsFading(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % spantext.length); // Move to next text
      }, 1000); // Duration before disappearing

      return () => clearTimeout(fadeOut); // Cleanup on component unmount
    }
  }, [isFading]);
    
  useGSAP(()=>{

    const tl=gsap.timeline();
        tl.to('.emoji',{
            x:10,
            rotation: 20,
            delay:0,
            duration:0.5,
            repeat: -1,
            yoyo: true,
            ease:"power1.out",
            })
},[]);

  return (
    <>
      <div className='mt-5 p-1 md:max-w-screen-xl w-full mx-auto relative flex justify-between bg-white/10'>
        <div className="mr-5 mt-5 flex flex-col">
          <div className="font-roboto-mono text-sm md:text-3xl  text-[#000080] p-1 flex ">hi!! Aditya Purohit <div className='emoji'>👋</div></div>
          <div className="mt-[40px] p-4">
            <div className="font-roboto-mono text-sm md:text-6xl mb-5">
              <span className="text-red-500">I am </span>
              <span className={`text-[#4e45d5] text-sm md:text-4xl p-4 bg-white rounded-lg shadow-md transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {displayedText}
              </span>
            </div>
            <div className='mt-7 p-1'>
              <p className='text-sm md:text-xl font-roboto-mono text-black mt-5 p-1'>
                I'm a Software developer and here is my portfolio website. Here you'll learn <br />
                about my journey as a software developer.
              </p>
            </div>
            <div className="mt-5">
              <Buttonn title="Hire Me" color="bg-red-500" hoverColor="hover:bg-[#4e45d5]" download="/resume.pdf"></Buttonn>
            </div>
          </div>
        </div>

        {/* White padding and animation using Tailwind CSS */}
        <div className="md:p-4  bg-white   md:rounded-lg md:shadow-md animate-scale">
          <img
            src="/userimg.jpg"
            alt=""
            className='md:w-[400px] md:h-[400px] w-[150px] h-[150px] mt-15 transition-all duration-300 ease-in-out'
          />
        </div>
      </div>
     <ProjectHome />
     <AllCards />
    </>
  );
}
