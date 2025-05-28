import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

function Nav() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.nav-item', {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      y: -60,
      stagger: 0.3,
      ease: "power1.out",
    });
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className='w-full md:max-w-screen-xl mx-auto  mx-auto py-6 flex items-center gap-4 md:gap-8 justify-between bg-white/60 backdrop-blur-md shadow-sm border-b border-gray-200
       backdrop-blur-lg rounded-xl shadow-lg text-white relativ '>
      
      <div className='flex items-center mb-4 md:mb-0 '>
        <img src="/logo.jpg" alt="" className='w-10 h-15  pt-4 ' />
        <span className='item-center text-black   text-sm md:text-lg lg:text-xl mt-[13px] Nav nav-item ml-[-0.7em]'>
          ditya Purohit
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 mt-5 mr-5">
        {navItems.map((item, index) => {
          if (!item.name) {
            return (
              <span
                key={index}
                className='w-[2px] h-6 bg-white Nav nav-item '
              ></span>
            );
          }

          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-lg flex items-center text-sm md:text-lg lg:text-xl gap-2 Nav nav-item ${
                  isActive ? 'text-red-600  underline' : 'text-black'
                }`
              }
            >
              
              {item.name === "About" && (
                <span
                  style={{ boxShadow: "0 0 0.55em #00FF19" }}
                  className="inline-block w-[5px] h-[5px] rounded-full bg-green-600 mt-2"
                ></span>
              )}
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
