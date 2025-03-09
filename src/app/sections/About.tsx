"use client";
import { motion } from "framer-motion";
import DotsBackground from "../components/DotsBackground"; // Animated dots effect

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-10 md:px-20 text-white bg-[#03071e] overflow-hidden">
      {/* Floating Dots Background */}
      <DotsBackground />

      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-left relative z-10 flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat">
          Who We <span className="text-[#E63946]">Are</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
          Metsaspace Inc. is an innovation-driven tech company specializing in
          cutting-edge software solutions, AI, and digital transformation. Our
          mission is to create world-class technology that reshapes industries.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 border border-[#E63946] rounded-lg bg-[#111] shadow-lg">
            <h3 className="text-xl font-semibold text-[#E63946]">
              Our Mission
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              To revolutionize industries through AI, automation, and
              cutting-edge solutions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 border border-[#FACC15] rounded-lg bg-[#111] shadow-lg">
            <h3 className="text-xl font-semibold text-[#FACC15]">Our Vision</h3>
            <p className="text-gray-400 text-sm mt-2">
              Empower businesses and individuals with transformative technology.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Animated Tech Pulse */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex items-center justify-center relative z-10">
        {/* Animated Pulsing Rings */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Central Core */}
          <div className="w-12 h-12 bg-[#E63946] rounded-full shadow-[0_0_20px_#E63946]"></div>

          {/* Pulsing Rings */}
          <motion.div
            className="absolute w-32 h-32 border-2 border-[#E63946] rounded-full"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}></motion.div>

          <motion.div
            className="absolute w-48 h-48 border-2 border-[#FACC15] rounded-full"
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}></motion.div>

          <motion.div
            className="absolute w-64 h-64 border-2 border-[#2561A4] rounded-full"
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
