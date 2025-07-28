"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SocialLink {
  name: string;
  url: string;
  iconClass: string;
  displayName?: string;
}

interface QuickLink {
  label: string;
  href: string;
}

interface ContactInfo {
  email: string;
  location: string;
}

interface FooterProps {
  brandTitle?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  quickLinks?: QuickLink[];
  contactInfo?: ContactInfo;
  privacyPolicyLink?: string;
  termsOfServiceLink?: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Nethna-Oshad",
    iconClass: "fab fa-github",
    displayName: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nethna-oshad-874516216/",
    iconClass: "fab fa-linkedin-in",
    displayName: "LinkedIn",
  },
];

const defaultQuickLinks: QuickLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const defaultContactInfo: ContactInfo = {
  email: "nethna2001oshad@gmail.com",
  location: "Sri Lanka",
};

function Footer({
  brandTitle = "Nethna.dev",
  brandDescription = "Full-Stack Developer crafting seamless web applications.",
  socialLinks = defaultSocialLinks,
  quickLinks = defaultQuickLinks,
  contactInfo = defaultContactInfo,
  privacyPolicyLink = "#",
  termsOfServiceLink = "#",
}: FooterProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("footer");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="relative py-16 sm:py-20 bg-gray-800/30 backdrop-blur-sm border-t border-gray-700/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-20"
        >
          <div className="space-y-4">
            <h2
              className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              tabIndex={0}
            >
              {brandTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 hover:text-gray-300 transition-colors duration-300">
              {brandDescription}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social: SocialLink, index: number) => (
                <motion.a
                  key={social.name + index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10"
                  aria-label={`Visit ${social.name} profile`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <i
                    className={`${social.iconClass} relative text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110`}
                  ></i>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">Quick Links</h2>
            <nav aria-label="Quick Links">
              <ul className="space-y-2">
                {quickLinks.map((link: QuickLink, index: number) => (
                  <motion.li
                    key={link.label + index}
                    initial={{ opacity: 0, translateX: -10 }}
                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">Contact</h2>
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                tabIndex={0}
                initial={{ opacity: 0, translateX: 10 }}
                animate={isVisible ? { opacity: 1, translateX: 0 } : {}}
                transition={{ duration: 0.3 }}
              >
                <i
                  className="fas fa-envelope text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  aria-hidden="true"
                ></i>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm sm:text-base text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                tabIndex={0}
                initial={{ opacity: 0, translateX: 10 }}
                animate={isVisible ? { opacity: 1, translateX: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <i
                  className="fas fa-location-dot text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  aria-hidden="true"
                ></i>
                <span className="text-sm sm:text-base text-gray-400">{contactInfo.location}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group p-2 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300"></i>
          </button>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-20 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base text-gray-400">
              © {new Date().getFullYear()} {brandTitle.replace(/<|\/|>/g, "")}.
              All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href={privacyPolicyLink}
                className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href={termsOfServiceLink}
                className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;