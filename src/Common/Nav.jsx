import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaHome,
    FaUser,
    FaEnvelope,
    FaGithub,
    FaFileAlt,
    FaBars,
    FaTimes,
    FaFolderOpen,
} from 'react-icons/fa';

const navItems = [
    { name: 'Home', icon: <FaHome />, to: '#home' },
    { name: 'About', icon: <FaUser />, to: '#about' },
    { name: 'Projects', icon: <FaFolderOpen />, to: '#projects' },
    { name: 'Contact', icon: <FaEnvelope />, to: '/admin_dashboard/add_contact_info' },
    { name: 'GitHub', icon: <FaGithub />, to: 'https://github.com/akweb69', external: true },
    { name: 'Resume', icon: <FaFileAlt />, to: '/Resume.pdf', external: true },
];

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/30 rounded-full px-6 py-2 shadow-xl"
            >
                {/* 🔥 Permanent Glowing Border Animation */}
                <motion.div
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md z-[-1]"
                ></motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-white">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.to}
                            target={item.external ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition"
                        >
                            {item.icon}
                            {item.name}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden text-white text-xl">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Dropdown */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-2 w-full flex flex-col items-center gap-3 backdrop-blur-md bg-white/10 border border-white/20 px-6 py-4 rounded-2xl shadow-xl text-white"
                >
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.to}
                            target={item.external ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 hover:text-blue-400 transition"
                            onClick={() => setOpen(false)}
                        >
                            {item.icon}
                            {item.name}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Nav;
