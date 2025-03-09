"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import MobileNav from "./MobileNav"; // Import Mobile Navigation

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ["home", "about", "services", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[50%] transition-all z-50
      ${
        isScrolled
          ? "bg-black/50 backdrop-blur-md shadow-lg"
          : "bg-white/10 backdrop-blur-xl shadow-lg"
      }
      rounded-2xl px-6 py-3 flex items-center justify-between`}>
      {/* Logo */}
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-70}
        className="cursor-pointer">
        <Image
          src="/logo.png"
          alt="Metsaspace Logo"
          width={180}
          height={40}
          className="drop-shadow-lg"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-white text-lg">
        {["Home", "About", "Services", "Contact"].map((section) => (
          <li key={section} className="relative">
            <Link
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-gray-400 transition">
              {section}
            </Link>
            {/* Active Section Indicator */}
            {activeSection === section.toLowerCase() && (
              <div className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-[#E63946] rounded-full transition-all"></div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
