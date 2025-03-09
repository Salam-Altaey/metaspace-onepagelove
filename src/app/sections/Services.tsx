"use client";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaCloud, FaRocket } from "react-icons/fa";
import DotsBackground from "../components/DotsBackground"; // Background dots effect

const services = [
  {
    title: "Building Tech Companies",
    description:
      "We create and launch new businesses powered by Metsaspace, if you thought of it, we've probably done it.",
    icon: <FaRocket className="text-5xl text-[#E63946]" />,
  },
  {
    title: "Software Development",
    description:
      "We develop scalable and innovative applications for our ecosystem of companies and beyond.",
    icon: <FaCode className="text-5xl text-[#FACC15]" />,
  },
  {
    title: "AI & Data Intelligence",
    description:
      "We leverage AI and data to optimize businesses and enhance decision-making across industries.",
    icon: <FaBrain className="text-5xl text-[#2561A4]" />,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "We provide robust cloud solutions to power our ventures and ensure high availability.",
    icon: <FaCloud className="text-5xl text-[#8A2BE2]" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center min-h-screen px-10 md:px-20 text-white bg-[#0C0F1A] overflow-hidden">
      {/* Background Dots Effect */}
      <div className="absolute inset-0 z-0">
        <DotsBackground />
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold font-montserrat mb-12 text-center relative z-10">
        What We <span className="text-[#E63946]">Build</span>
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative p-8 border border-white/10 rounded-lg shadow-lg backdrop-blur-md bg-transparent transition-all duration-300 hover:shadow-[0_0_20px_#E63946] overflow-hidden z-10">
            {/* Service Icon & Title */}
            <div className="flex items-center gap-4 mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
