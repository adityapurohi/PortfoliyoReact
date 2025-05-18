import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6yrpykd', 'template_1da90ih', form.current, 'L8ref3teBIqviP_N6')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong. Try again!");
      });
  };
  return (
    <div className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-12 text-center max-w-xl">
        Have a project in mind, want to collaborate, or just want to say hi? Fill the form or reach out directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" />
            <span className="text-gray-700 text-lg">kunwaradityapurohit@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-blue-600" />
            <span className="text-gray-700 text-lg">+91-9351650633</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600" />
            <span className="text-gray-700 text-lg">Bikaner, Rajasthan, India</span>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-gray-50 shadow-lg rounded-xl p-8 space-y-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            name="from_name" 
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            name="from_email"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            name="message"
          />
          <button
            type="submit"
            className="bg-blue-600 flex items-center justify-center gap-2 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
