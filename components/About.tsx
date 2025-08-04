"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

interface AboutProps {
    timeline?: TimelineItem[];
    title?: string;
}

const defaultTimeline: TimelineItem[] = [
    {
        year: "2023",
        title: "Started B.Sc at SLIIT",
        description:
            "Began pursuing a B.Sc (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT), Faculty of ComputingCompleted the first year with a strong foundation in programming, OOP, databases, data structures, and web development, while gaining practical experience through projects and exploring UI/UX and software engineering principles.",
    },
    {
        year: "2024",
        title: "Started Second Year at SLIIT",
        description:
            "Strengthened skills in full-stack web development, advanced database management, software engineering practices, and performance optimization through hands-on projects and collaborative learning.",
    },
    {
        year: "2025",
        title: "Third Year at SLIIT",
        description:
            "Currently in the third year of the B.Sc (Hons) in Information Technology at SLIIT, Faculty of Computing, focusing on advanced software engineering concepts and preparing for a career in technology.",
    },
];

function About({
    timeline = defaultTimeline,
    title = "About Me",
}: AboutProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("about");
            if (element) {
                const { top } = element.getBoundingClientRect();
                if (top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            id="about"
            className="relative min-h-screen py-16 sm:py-24 overflow-hidden"
        >
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, translateY: 4 }}
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center -mt-10 mb-12 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500/20" />

                    {timeline.map((item: TimelineItem, index: number) => (
                        <div
                            key={item.year + index}
                            className={`relative flex flex-col sm:flex-row items-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4 sm:mb-0">
                                <span className="text-white font-bold">{item.year}</span>
                            </div>

                            <div
                                className={`w-full sm:w-5/12 ${index % 2 === 0
                                        ? "sm:pr-16 sm:text-right"
                                        : "sm:pl-16 sm:ml-auto"
                                    }`}
                            >
                                <div className="p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;