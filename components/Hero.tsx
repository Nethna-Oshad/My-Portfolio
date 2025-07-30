"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

interface HeroProps {
    greeting?: string;
    name?: string;
    typewriterStrings?: string[];
    profileImage?: string;
    profileImageAlt?: string;
    ctaLink?: string;
}

function Hero({
    greeting = "Code → Design → logic",
    name = "Nethna Oshad",
    typewriterStrings = [
        "Frontend Engineer",
        "Backend Engineer",
        "Fullstack Engineer",
        "UI/UX Engineer",
    ],
    profileImage = "/Ne3.png",
    profileImageAlt = "Profile picture of Nethna",
    ctaLink = "#contact",
}: HeroProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-[80vh] overflow-hidden flex items-center justify-center"
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] min-w-[320px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 min-h-[80vh] items-center justify-items-center">
                    {/* Left Side: Text Content */}
                    <div className="pt-16 sm:pt-20 md:pt-0 max-w-lg sm:max-w-xl justify-self-center md:justify-self-start text-center md:text-left">
                        <motion.div
                            initial={{ translateY: 10, opacity: 0 }}
                            animate={isVisible ? { translateY: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            className="mb-6 sm:mb-8 will-change-transform-opacity"
                        >
                            <div className="inline-block rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-300 border border-gray-700 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm bg-gray-900/30">
                                {greeting}
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ translateY: 10, opacity: 0 }}
                            animate={isVisible ? { translateY: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight text-white mb-6 sm:mb-8 will-change-transform-opacity"
                        >
                            <span className="relative">
                                Hello, I'm<br />
                                <span className="text-blue-500">{name}</span>
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ translateY: 10, opacity: 0 }}
                            animate={isVisible ? { translateY: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="will-change-contents"
                        >
                            <TypewriterComponent
                                options={{
                                    strings: typewriterStrings,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 100,
                                    delay: 150,
                                    wrapperClassName:
                                        "text-lg sm:text-xl md:text-2xl font-medium text-blue-500",
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ translateY: 10, opacity: 0 }}
                            animate={isVisible ? { translateY: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6 will-change-transform-opacity"
                        >
                            <Button
                                size="lg"
                                asChild
                                className="group relative rounded-lg bg-blue-500 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <a href={ctaLink} aria-label="Get in Touch">
                                    <span className="relative z-10">Get in Touch</span>
                                    <div className="absolute inset-0 bg-blue-400 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                asChild
                                variant="outline" // Use outline variant to differentiate from primary button
                                className="group relative rounded-lg border-blue-500 text-blue-500 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <a href="\Nethna Oshad.pdf" download aria-label="Download CV">
                                    <span className="relative z-10">Download CV</span>
                                    <div className="absolute inset-0 bg-blue-400 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Side: Circular Photo with Simplified Blur Effect */}
                    <motion.div
                        initial={{ translateX: 10, opacity: 0 }}
                        animate={isVisible ? { translateX: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] justify-self-center md:justify-self-end mt-8 md:mt-0 will-change-transform-opacity"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-md rounded-full z-10" />
                        <div className="absolute inset-1 rounded-full border-2 border-dashed border-blue-400/100 animate-spin-wild z-10" />
                        <img
                            src={profileImage}
                            alt={profileImageAlt}
                            className="relative z-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] mx-auto object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;