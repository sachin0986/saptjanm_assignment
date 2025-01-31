import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { GIT_URL } from "../Utils/Constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Dating App
            </h3>
            <p className="text-sm text-gray-400">
              © 2024 Dating App. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center space-y-3">
            <a href="/privacy" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
              Terms of Service
            </a>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              Made with <FaHeart className="text-pink-500 animate-pulse" /> @sachinarora
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 mb-4">Connect With Us</p>
            <div className="flex justify-center md:justify-end space-x-6">
              {[
                { icon: FaGithub, href: {GIT_URL} },
                { icon: FaInstagram, href: "https://instagram.com/sachinarora_01" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/sachin/0986" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 hover:text-pink-400 transition-all duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;