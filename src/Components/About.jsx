import React from "react";

const About = () => {
    return (
        <div className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-6 md:px-20 py-24">
            {/* Background Gradient + Animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-purple-900 to-pink-900 animate-gradient-bg -z-10" />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white opacity-10"
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

            {/* Content Box */}
            <div className="relative max-w-3xl bg-[#0f172a] bg-opacity-60 backdrop-blur-md border border-blue-500/40 rounded-xl p-10 shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
                    About Me
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    I am Abu Kalam, a passionate MERN Stack Web Developer based in Dhaka,
                    Bangladesh. I specialize in building clean, scalable, and responsive
                    web applications using modern technologies like React, Node.js,
                    MongoDB, and Tailwind CSS. With a strong focus on UI/UX and
                    performance, I aim to deliver seamless user experiences.
                    <br />
                    <br />
                    I’m constantly exploring new tools and techniques to enhance my
                    development skills and contribute to open source projects. When not
                    coding, I enjoy reading tech blogs, watching documentaries, and
                    learning about the latest in web development.
                </p>
            </div>

            {/* CSS for floating and gradient animations */}
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
      `}</style>
        </div>
    );
};

export default About;
