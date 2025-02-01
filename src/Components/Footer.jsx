import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { GIT_URL, INSTAGRAM_URL, LINKEDIN_URL } from "../Utils/Constants";

const FooterStyle = {
  footerDiv: `bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-white/10`,
  h3: `text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent`,
  logoDiv: `text-center md:text-left space-y-3`,
  linkDiv: `flex flex-col items-center space-y-3`,
  links: `text-sm text-gray-300 hover:text-pink-400 transition-colors`,
  heartIcon: `text-pink-500 animate-pulse`,
  socialLinksDiv: `text-center md:text-right`,
  p: `text-sm text-gray-400 mb-4`,
  logoP: `text-sm text-gray-400`,
  socialLinks: `flex justify-center md:justify-end space-x-6`,
  a: `transform hover:scale-110 hover:text-pink-400 transition-all duration-300`,

}

const Footer = () => {
  return (
    <footer className={FooterStyle.footerDiv}>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className={FooterStyle.logoDiv}>
            <h3 className={FooterStyle.h3}>
              Dating App
            </h3>
            <p className={FooterStyle.logoP}>
              © 2024 Dating App. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className={FooterStyle.linkDiv}>
            <a href="/privacy" className={FooterStyle.links}>
              Privacy Policy
            </a>
            <a href="/terms" className={FooterStyle.links}>
              Terms of Service
            </a>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              Made with <FaHeart className={FooterStyle.heartIcon}/> @sachinarora
            </p>
          </div>

          {/* Social Links */}
          <div className={FooterStyle.socialLinksDiv}>
            <p className={FooterStyle.p}>Connect With Us</p>
            <div className={FooterStyle.socialLinks}>
              {[
                { icon: FaGithub, href: GIT_URL },
                { icon: FaInstagram, href: INSTAGRAM_URL },
                { icon: FaLinkedin, href: LINKEDIN_URL }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={FooterStyle.a}
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