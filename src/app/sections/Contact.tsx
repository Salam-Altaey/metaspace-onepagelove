"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import DotsBackground from "../components/DotsBackground"; // Import the dots effect

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset message after 3 sec
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!"); // Replace with backend integration
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen px-10 md:px-20 text-white bg-[#0C0F1A] overflow-hidden">
      {/* Dots Background - Ensure it's behind everything but visible */}
      <div className="absolute inset-0   pointer-events-none">
        <DotsBackground />
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold font-montserrat mb-12 text-center">
        Stay <span className="text-[#E63946]">Connected</span>
      </motion.h2>

      {/* New Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative p-8 border border-white/10 rounded-lg shadow-lg backdrop-blur-lg bg-transparent w-full lg:w-1/2 z-10">
          <h3 className="text-2xl font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Stay updated on Metsaspace’s latest projects and innovations.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-[#E63946] text-white"
              required
            />
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-[#E63946] text-white font-semibold rounded-lg hover:shadow-[0_0_12px_#E63946] transition-all">
              {isSubmitted ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative p-8 border border-white/10 rounded-lg shadow-lg backdrop-blur-lg bg-transparent w-full lg:w-1/2 z-10">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-4">
            Have a question or business inquiry? Drop us a message.
          </p>
          <form onSubmit={handleContactSubmit} className="flex flex-col">
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-[#E63946] text-white h-32"
              required
            />
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-[#2561A4] text-white font-semibold rounded-lg hover:shadow-[0_0_12px_#2561A4] transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
