"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 rounded-lg text-white bg-transparent focus:outline-none">
        {isOpen ? (
          <IoMdClose className="text-3xl transition-transform duration-200 ease-in-out" />
        ) : (
          <IoMdMenu className="text-3xl transition-transform duration-200 ease-in-out" />
        )}
      </button>

      {/* Overlay + Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Background */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-lg z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />

            {/* Expanded Navbar Menu with Matched Border Radius */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-[#0C0F1A]/80 backdrop-blur-xl text-white shadow-lg flex flex-col items-center justify-center space-y-6 py-6 z-50 origin-top rounded-2xl" // Same border radius as main navbar
            >
              {["Home", "About", "Services", "Contact"].map((section) => (
                <Link
                  key={section}
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-lg hover:text-[#E63946] transition"
                  onClick={() => setIsOpen(false)}>
                  {section}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
