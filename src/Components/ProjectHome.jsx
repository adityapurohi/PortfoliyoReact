import React from 'react'
import Projectsshow from './Projectsshow'

function ProjectHome() {
  return (
    <>
    <div className="container w-full  bg-[#E8F5E9] ">
     <div className='flex flex-col justify items-center justify-items-center justify-center p-10 ' >
        <h4 className="fn text-lg text-[#E65100]">some of my recent works</h4>
        <h1 className='md:text-7xl text-lg font-poppins py-10 '>PROJECTS</h1>

     </div>
     <div className="grid md:grid-cols-2 grid-col-4 px-5 py-5 md:gap-4 ">
        <div className="flex flex-col justify-center items-center justify-items-center justify-center p-2 px-2 py-2">
            <h3 className="fn md:text-4xl text-sm font-poppins  text-[#333333] p-1 px-2 py-3"> E-commerce Website (Khadau) </h3>
            <img src="/e-commerce.webp" alt="" className="w-3/4 h-3/4 mt-2 rounded-lg" />
        </div>
        <div className="flex flex-col justify-center items-center justify-items-center justify-center p-2 px-2 py-2">
        <h3 className="md:text-4xl text-sm font-poppins  text-[#333333] p-1 px-2 py-3"> Chat Application </h3>
        <img src="Chatapp.webp" alt="" className="w-3/4 h-3/4 rounded-lg " />
        </div>
        <div className="flex flex-col justify-center items-center justify-items-center justify-center p-2 px-2 py-2">
        <h3 className="md:text-4xl text-sm font-poppins  text-[#333333] p-1 px-2 py-3"> Personal Blog</h3>
        <img src="/blog.png" alt="" className="w-3/4 h-3/4 rounded-lg" />
        </div>
        <div className="flex flex-col justify-center items-center justify-items-center justify-center p-2 px-2 py-2">
        <h3 className="md:text-4xl text-sm font-poppins  text-[#333333] p-1 px-2 py-3"> Portfoliyo Website </h3>
        <img src="Port.jpg" alt="" className="w-3/4 h-3/4 rounded-lg" />
        </div>
     </div>
     </div>
    </>
   
  )
}

export default ProjectHome
