
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Certification {
    title: string;
    issuer: string;
    description: string;
    link: string;
    icon: string;
}

const certifications: Certification[] = [
    {
        title: "Next.js: Creating and Hosting a Full-Stack Site",
        issuer: "LinkedIn Learning",
        description:
            "Mastered building a full-stack web application using Next.js, covering React interfaces, back-end functionality, network requests, and hosting.",
        link: "https://lnkd.in/engex8ew",
        icon: "fa-code",
    },
    {
        title: "Figma for UX Design",
        issuer: "LinkedIn Learning",
        description:
            "Learned to use Figma for UX design, including project creation, prototyping, collaboration, and file exporting for intuitive user experiences.",
        link: "https://lnkd.in/eyE_UZhm",
        icon: "fa-paint-brush",
    },
];

function Certifications() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("certifications");
            if (element) {
                const { top } = element.getBoundingClientRect();
                if (top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        const timer = setTimeout(() => setIsLoading(false), 1000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const SkeletonCard = () => (
        <div className="bg-gray-800/30 rounded-xl overflow-hidden animate-pulse">
            <div className="p-4 sm:p-6 space-y-4">
                <div className="h-6 w-2/3 bg-gray-700/30 rounded" />
                <div className="h-4 w-1/2 bg-gray-700/30 rounded" />
                <div className="h-4 w-full bg-gray-700/30 rounded" />
                <div className="h-4 w-3/4 bg-gray-700/30 rounded" />
                <div className="h-8 w-24 bg-gray-700/30 rounded-full" />
            </div>
        </div>
    );

    return (
        <section
            id="certifications"
            className="relative min-h-screen py-16 sm:py-24 overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, translateY: 4 }}
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My Certifications
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4" />
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                        A showcase of my professional certifications in full-stack development and UX design
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {isLoading
                        ? [...Array(2)].map((_, index: number) => (
                              <SkeletonCard key={index} />
                          ))
                        : certifications.map((cert: Certification, index: number) => (
                              <motion.div
                                  key={cert.title}
                                  initial={{ opacity: 0, translateY: 4 }}
                                  animate={
                                      isVisible
                                          ? { opacity: 1, translateY: 0 }
                                          : {}
                                  }
                                  transition={{
                                      duration: 0.5,
                                      delay: index * 0.1,
                                  }}
                                  className="group relative bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm"
                              >
                                  <div className="p-4 sm:p-6 space-y-4">
                                      <div className="flex items-center gap-3">
                                          <i
                                              className={`fa-solid ${cert.icon} text-2xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300`}
                                          />
                                          <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                              {cert.title}
                                          </h3>
                                      </div>
                                      <p className="text-sm text-gray-400">
                                          Issued by {cert.issuer}
                                      </p>
                                      <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                          {cert.description}
                                      </p>
                                      <div className="pt-4 border-t border-gray-700/50">
                                          <a
                                              href={cert.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                          >
                                              <span>View Certificate</span>
                                              <svg
                                                  className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                              >
                                                  <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                  />
                                              </svg>
                                          </a>
                                      </div>
                                  </div>
                              </motion.div>
                          ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;