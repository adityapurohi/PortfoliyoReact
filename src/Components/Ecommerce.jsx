import React from 'react';

function Ecommerce() {
  return (
    <div className="bg-[#121212] w-full py-10  ">
      {/* Heading */}
      <div className="flex items-center justify-center flex-col text-center max-w-screen-xl mx-auto">
        <h1 className="text-yellow-500 text-3xl font-bold">Ecommerce-Khadau Project</h1>
        <p className="text-white text-lg">A Modern E-commerce Platform for Footwear Shopping</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto mt-10 gap-10 px-6">
        {/* ✅ Left Side: Project Description */}
        <div className="text-white p-6 rounded-lg flex-1 text-left">
          <h2 className="text-2xl font-bold mb-4">E-commerce - Khadau</h2>
          <p>
            A cutting-edge e-commerce platform designed to revolutionize online footwear shopping.
            Built with a sleek, modern UI and a powerful backend, this platform ensures a seamless,
            fast, and secure shopping experience for users.
          </p>

          <h3 className="text-xl font-semibold mt-4">🚀 Key Features:</h3>
          <ul className="flex flex-col gap-2">
            <li>✅ <strong>Stunning UI/UX –</strong> Designed with Tailwind CSS for a highly responsive and visually appealing experience.</li>
            <li>✅ <strong>Dynamic Product Management –</strong> Users can explore a wide range of footwear and manage their cart.</li>
            <li>✅ <strong>Secure Authentication –</strong> JWT-based authentication for a personalized experience.</li>
            <li>✅ <strong>Smart Cart & Checkout –</strong> Add/remove products, view total cost, and checkout easily.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">🛠 Tech Stack:</h3>
          <ul className="flex flex-col gap-2">
            <li>🔹 <strong>Frontend:</strong> React.js, Tailwind CSS</li>
            <li>🔹 <strong>Backend:</strong> Node.js, Express.js</li>
            <li>🔹 <strong>Database:</strong> MongoDB</li>
            <li>🔹 <strong>Authentication:</strong> JWT (JSON Web Tokens)</li>
          </ul>
        </div>

        {/* ✅ Right Side: Project Image */}
        <div className="flex-1 flex justify-center ">
          <img src="/khadauP.webp" alt="Khadau E-commerce Project" className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
