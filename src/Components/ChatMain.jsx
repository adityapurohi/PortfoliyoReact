import React from 'react';

function ChatMain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-100 flex flex-col items-center py-16 px-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-indigo-700 leading-tight">
            Real-Time Chat Application
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
            Using <span className="font-semibold text-indigo-500">Node.js</span>, <span className="font-semibold text-indigo-500">React</span>, and <span className="font-semibold text-indigo-500">Socket.io</span>
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-16 text-gray-800">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4 border-b-2 border-indigo-300 pb-2">
              Introduction
            </h2>
            <p className="text-lg leading-relaxed max-w-4xl">
              This case study explores the development of a real-time chat application
              built using <strong className="text-indigo-700">Node.js</strong>, <strong className="text-indigo-700">React</strong>, and <strong className="text-indigo-700">Socket.io</strong>.
              This application enables instant messaging between users, providing a seamless experience
              with real-time updates.
            </p>
          </section>

          {/* Technology Stack */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-300 pb-2">
              Technology Stack
            </h2>
            <div className="space-y-6 max-w-4xl">
              {[
                {
                  title: 'Node.js (Backend)',
                  description:
                    'Node.js is used to build the backend server for its fast and efficient processing. We leverage Express.js for routing and API management.',
                },
                {
                  title: 'React (Frontend)',
                  description:
                    'React is used for the frontend, creating a dynamic, responsive UI with efficient component-based architecture.',
                },
                {
                  title: 'Socket.io (Real-time Communication)',
                  description:
                    'Socket.io enables real-time communication, allowing messages to be instantly pushed between the client and server.',
                },
              ].map(({ title, description }) => (
                <div key={title} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 20l9-5-9-5-9 5 9 5z" />
                      <path d="M12 12l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-1 text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-300 pb-2">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl text-gray-700">
              <li>Real-time messaging with instant updates across all connected clients.</li>
              <li>Multiple chat rooms support, enabling different group conversations.</li>
              <li>User authentication to ensure secure login and join rooms.</li>
              <li>Typing indicator for a better real-time interaction experience.</li>
              <li>Private messaging between users for direct, one-on-one communication.</li>
            </ul>
          </section>

          {/* System Architecture */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4 border-b-2 border-indigo-300 pb-2">
              System Architecture
            </h2>
            <p className="text-lg max-w-4xl leading-relaxed text-gray-700">
              The system is built on a client-server model where the frontend (React) communicates with
              the backend (Node.js). The Socket.io library is used to facilitate real-time communication
              between the server and the clients, ensuring that messages are instantly broadcasted to
              all connected users.
            </p>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4 border-b-2 border-indigo-300 pb-2">
              Conclusion
            </h2>
            <p className="text-lg max-w-4xl leading-relaxed text-gray-700">
              This chat application provides an efficient, scalable, and responsive real-time messaging platform.
              By utilizing technologies like Node.js, React, and Socket.io, we are able to create a seamless user experience
              where messages are instantly broadcasted to connected clients, and users can interact in different chat rooms
              with ease.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ChatMain;
