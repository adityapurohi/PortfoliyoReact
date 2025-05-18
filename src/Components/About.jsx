import React from 'react';
import Buttonn from './Button';

function About() {
  return (
    <>
      {/* Main About Section */}
      <section className="bg-white py-16 px-6 sm:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#000080] mb-3">Hi, I'm Aditya Purohit</h2>
          <h3 className="text-2xl text-blue-800 font-semibold mb-6">A Creative Web Developer from Rajasthan</h3>

          <p className="text-lg text-gray-700 mb-4">
            I come from the culturally rich city of Bikaner, Rajasthan. Since childhood, I’ve been fascinated by art and design, which naturally led me into web development — a space where logic meets creativity.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            I began coding in my first year of college and instantly fell in love with how creative and impactful it can be. Whether it’s a functional app or a beautiful website, I believe in creating things that are useful, intuitive, and delightful.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            My goal is to solve real-world problems with clean design and smart code. Let's build something amazing together.
          </p>

          {/* Why Me Section */}
          <ul className="space-y-2 mb-6">
            <li className="flex items-start text-gray-800">
              <span className="text-blue-600 font-bold mr-2">✔</span>
              Passionate about blending design & development
            </li>
            <li className="flex items-start text-gray-800">
              <span className="text-blue-600 font-bold mr-2">✔</span>
              Strong foundation in frontend and backend
            </li>
            <li className="flex items-start text-gray-800">
              <span className="text-blue-600 font-bold mr-2">✔</span>
              Clean, maintainable, and scalable code
            </li>
            <li className="flex items-start text-gray-800">
              <span className="text-blue-600 font-bold mr-2">✔</span>
              Always learning and adapting new technologies
            </li>
          </ul>

          <Buttonn
            title="Download Resume"
            color="bg-red-500"
            hoverColor="hover:bg-blue-700"
            download="/resume.pdf"
          />
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src="/ADI.jpg"
              alt="Aditya Purohit"
              className="w-full max-w-md h-50  object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-12 mt-10 mb-16">
        <div className="bg-blue-900 rounded-3xl text-white p-10 text-center shadow-lg max-w-5xl mx-auto">
          <h4 className="text-xl mb-2">Got a Project?</h4>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let me help you bring it to life</h2>
          <Buttonn
            title="Contact Now"
            color=" bg-white "
            hoverColor="hover:bg-gray-200 "
            to="/contact"
            textcolor="text-blue-900"
          />
        </div>
      </section>
    </>
  );
}

export default About;