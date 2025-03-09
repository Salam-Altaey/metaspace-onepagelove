"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0E18] text-white py-16 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Metsaspace Inc.</h3>
          <p className="text-gray-400 text-sm mb-2">
            Empowering the future by building world-class ventures.
          </p>
          <p className="text-gray-400 text-sm">
            Creating innovative businesses across multiple industries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#services" className="hover:text-[#E63946] transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#E63946] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#E63946] transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#E63946] transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#E63946] transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-[#E63946]" />
            <p className="text-gray-400 text-sm">contact@metsaspace.com</p>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <FaPhone className="text-[#E63946]" />
            <p className="text-gray-400 text-sm">+1 234 567 890</p>
          </div>
          <p className="text-gray-400 text-sm">
            123 Innovation Street, Tech City, Metaverse 10001
          </p>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <div className="flex gap-4 mb-4">
            <a
              href="#"
              className="p-2 bg-[#1D1F29] rounded-full hover:bg-[#E63946] transition">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="p-2 bg-[#1D1F29] rounded-full hover:bg-[#E63946] transition">
              <FaTwitter className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="p-2 bg-[#1D1F29] rounded-full hover:bg-[#E63946] transition">
              <FaLinkedinIn className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="p-2 bg-[#1D1F29] rounded-full hover:bg-[#E63946] transition">
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            Subscribe to our newsletter:
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-sm bg-[#1D1F29] border border-gray-700 rounded-l-lg focus:outline-none focus:border-[#E63946] text-white"
            />
            <button className="px-4 py-2 text-sm bg-[#E63946] text-white rounded-r-lg hover:shadow-[0_0_12px_#E63946] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Metsaspace Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
