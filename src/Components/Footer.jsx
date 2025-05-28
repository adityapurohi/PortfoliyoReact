import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Branding Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Aditya Purohit</h2>
          <p className="text-gray-400">
            Freelance Web Designer & Developer from Rajasthan, India. Passionate about building performant & beautifully crafted web experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-500 transition-all">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500 transition-all">About</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-500 transition-all">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500 transition-all">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📞 +91 9351650633</li>
            <li>📧 kunwaradityapurohit@gmail.com</li>
            <li>📍 Nathusar Gate, Bikaner</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Follow Me</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://github.com/adityapurohi" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href=" https://www.linkedin.com/in/aditya-narayan-purohit-bikaner/" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Aditya Purohit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;