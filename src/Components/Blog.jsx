import React from "react";
import Buttonn from "./Button";

function Blog() {
  return (
    <div className="max-w-5xl mx-auto p-10 ">
      {/* Header Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          🚀 My Blog Platform
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          A modern and feature-rich blogging platform built with React & Node.js
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">🔹 Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-lg">
          <li>
            🖋️ <b>Well-Structured & Engaging Content</b> – Blogs are easy to
            read with a clean and user-friendly design.
          </li>
          <li>
            📌 <b>Categorized Topics</b> – Well-organized content with different
            categories for easy navigation.
          </li>
          <li>
            🔍 <b>Smart Search Functionality</b> – Quickly find blogs on any
            topic with an intuitive search bar.
          </li>
          <li>
            💬 <b>Interactive Comment Section</b> – Engage with readers through
            comments and discussions.
          </li>
          <li>
            🌙 <b>Light & Dark Mode</b> – Customize your reading experience
            with theme switching.
          </li>
        </ul>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-gray-50 shadow-md rounded-lg p-8 mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">🛠 Tech Stack Used</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-lg">
          <li>Frontend: React.js, Tailwind CSS</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
          <li>Hosting: Vercel (Frontend), Render / Railway (Backend)</li>
        </ul>
      </div>

      {/* Image & Buttons Section */}
      <div className="flex  items-center justify-between shadow-md mt-12">
        <div className="w-full md:w-1/2 ">
          <img
            src="/Newblog.webp"
            alt="Blog Preview"
            className="rounded-xl shadow-md "
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-6 md:mt-0 ml-[50px]">
          <div className="flex gap-4">
            <Buttonn title="GitHub" color="bg-black" hoverColor="hover:bg-blue-600" />
            <Buttonn title="Live Demo" color="bg-black" hoverColor="hover:bg-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
