import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaDownload } from "react-icons/fa";

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
    "Node.js", "Express.js", "MongoDB", "Firebase",
    "Framer Motion", "Git", "GitHub", "VS Code",
    "JSON", "Axios", "Bootstrap", "Material UI",
    "REST API", "JWT", "React Router"
];

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden text-white">
            {/* Background Gradient + Animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-purple-900 to-pink-900 animate-gradient-bg -z-10" />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full bg-white opacity-10`}
                    style={{
                        width: `${10 + Math.random() * 15}px`,
                        height: `${10 + Math.random() * 15}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-24 gap-10 md:gap-0 min-h-screen">
                {/* Left Side */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2 space-y-5"
                >

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Hello, I'm <span className="text-blue-400 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Abu Kalam</span>
                    </h1>

                    <h2 className="text-2xl font-semibold text-gray-300">
                        Web Developer | Tech Enthusiast
                    </h2>

                    <div className="text-lg text-blue-400 font-semibold">
                        <Typewriter
                            options={{
                                strings: [
                                    "MERN Stack Developer",
                                    "React.js Frontend Expert",
                                    "Express.js Backend Dev",
                                    "REST API Builder",
                                    "MongoDB Designer",
                                    "Firebase Integrator",
                                    "Tailwind CSS Wizard",
                                    "Framer Motion Animator",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>

                    <p className="text-gray-300 max-w-lg">
                        I specialize in building dynamic, user-friendly, and responsive web applications with clean UI and high performance. Currently seeking full-time or remote opportunities.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4 flex-wrap">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            <FaDownload /> Resume
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://github.com/akweb69"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            <FaGithub /> GitHub
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2 w-full"
                >
                    <div className="bg-[#0f172a] border border-blue-500/30 rounded-xl p-6 md:p-8 font-mono text-sm shadow-2xl relative overflow-hidden backdrop-blur-md bg-opacity-20 animate-fadeIn">
                        <div className="text-green-400">
                            <p>
                                const <span className="text-white">kalam</span> = &#123;
                            </p>
                            <p className="ml-4 text-purple-400">
                                name: <span className="text-blue-300">'Abu Kalam'</span>,
                            </p>
                            <p className="ml-4 text-purple-400">
                                role: <span className="text-blue-300">'MERN Stack Developer'</span>,
                            </p>
                            <p className="ml-4 text-purple-400">
                                location: <span className="text-blue-300">'Dhaka, Bangladesh'</span>,
                            </p>
                            <p className="ml-4 text-purple-400">
                                email: <span className="text-blue-300">'akwebdev69@gmail.com'</span>,
                            </p>
                            <p className="ml-4 text-purple-400">skills: [</p>

                            {/* Skills */}
                            <div className="ml-8 text-blue-300 flex flex-wrap gap-x-4 gap-y-1">
                                {[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "React",
                                    "Tailwind CSS",
                                    "Node.js",
                                    "Express.js",
                                    "MongoDB",
                                    "Firebase",
                                    "Framer Motion",
                                    "Git",
                                    "GitHub",
                                    "VS Code",
                                    "JSON",
                                    "Axios",
                                    "Bootstrap",
                                    "Material UI",
                                    "REST API",
                                    "JWT",
                                    "React Router",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="after:content-[','] last:after:content-['']"
                                    >
                                        '{skill}'
                                    </span>
                                ))}
                            </div>

                            <p className="ml-4 text-purple-400">]</p>
                            <p className="text-green-400">&#125;</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CSS for floating animation & gradient background */}
            <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 15s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default Hero;
