import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Projectsshow() {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      name: 'Ecommerce',
      description:
        'A fully functional e-commerce site with product listings, cart system, and online checkout built using React and Node.js.',
      imageUrl: './khadauP.webp',
    },
    {
      id: 2,
      name: 'Blog',
      description:
        'A dynamic blog platform with user authentication, post creation, and comment features using React and Node.js.',
      imageUrl: './blog.png',
    },
    {
      id: 3,
      name: 'Chatapp',
      description:
        'Real-time chat application with user authentication, chat rooms, and instant messaging using React and Node.js.',
      imageUrl: './Chatapp.webp',
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>

      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.03] transition duration-300">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {project.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No projects found.</p>
      )}
    </div>
  );
}

export default Projectsshow;