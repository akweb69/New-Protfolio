import React, { useState } from "react";
import { motion } from "framer-motion";

const techOptions = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Redux",
    "GSAP",
    "Framer Motion",
];

const AddProjects = () => {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        date: "",
        details: "",
        technology: [],
        features: "",
        advantages: "",
        logo: "",
        sliders: "",
        category: "",
        client: "",
        github: "",
        liveDemo: "",
        teamMembers: "",
        tags: "",
        challenges: "",
        solutions: "",
        testimonials: "",
        downloads: "",
        views: "",
    });

    // Generic input/textarea change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Add technology
    const handleTechAdd = (e) => {
        const value = e.target.value;
        if (value && !formData.technology.includes(value)) {
            setFormData((prev) => ({
                ...prev,
                technology: [...prev.technology, value],
            }));
        }
        e.target.value = "";
    };

    // Remove technology
    const handleTechRemove = (tech) => {
        setFormData((prev) => ({
            ...prev,
            technology: prev.technology.filter((t) => t !== tech),
        }));
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted project data:", formData);
        alert("Project data submitted! Check console.");
    };

    return (
        <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto bg-gray-900 bg-opacity-80 rounded-3xl p-10 shadow-2xl border border-purple-700"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-center mb-12 drop-shadow-lg">
                    Add a New Project
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    autoComplete="off"
                >
                    {/* Title */}
                    <motion.input
                        type="text"
                        name="title"
                        placeholder="Project Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Subtitle */}
                    <motion.input
                        type="text"
                        name="subtitle"
                        placeholder="Project Subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Date */}
                    <motion.input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Details */}
                    <motion.textarea
                        name="details"
                        placeholder="Project Details"
                        rows={3}
                        value={formData.details}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500 col-span-1 md:col-span-2 lg:col-span-3"
                    />

                    {/* Technology multi-select */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <label
                            htmlFor="technology"
                            className="block mb-2 text-purple-300 font-semibold"
                        >
                            Select Technologies
                        </label>
                        <select
                            id="technology"
                            onChange={handleTechAdd}
                            className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg transition duration-300 ease-in-out
                focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Technology
                            </option>
                            {techOptions.map((tech, i) => (
                                <option key={i} value={tech} className="bg-gray-900 text-purple-200">
                                    {tech}
                                </option>
                            ))}
                        </select>

                        {/* Selected technologies */}
                        <div className="mt-3 flex flex-wrap gap-3">
                            {formData.technology.length === 0 && (
                                <p className="text-purple-500 italic">No technology selected</p>
                            )}
                            {formData.technology.map((tech, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 text-white rounded-full px-4 py-1 flex items-center gap-2 shadow-lg select-none"
                                >
                                    {tech}
                                    <button
                                        type="button"
                                        onClick={() => handleTechRemove(tech)}
                                        className="hover:text-indigo-300 font-bold focus:outline-none"
                                        aria-label={`Remove ${tech}`}
                                    >
                                        &times;
                                    </button>
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <motion.textarea
                        name="features"
                        placeholder="Features (comma separated)"
                        rows={2}
                        value={formData.features}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    ></motion.textarea>

                    {/* Advantages */}
                    <motion.textarea
                        name="advantages"
                        placeholder="Advantages (comma separated)"
                        rows={2}
                        value={formData.advantages}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    ></motion.textarea>

                    {/* Logo URL */}
                    <motion.input
                        type="url"
                        name="logo"
                        placeholder="Logo URL"
                        value={formData.logo}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Sliders */}
                    <motion.input
                        type="text"
                        name="sliders"
                        placeholder="Slider Image URLs (comma separated)"
                        value={formData.sliders}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Category */}
                    <motion.input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Client Name */}
                    <motion.input
                        type="text"
                        name="client"
                        placeholder="Client Name"
                        value={formData.client}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* GitHub URL */}
                    <motion.input
                        type="url"
                        name="github"
                        placeholder="GitHub URL"
                        value={formData.github}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Live Demo URL */}
                    <motion.input
                        type="url"
                        name="liveDemo"
                        placeholder="Live Demo URL"
                        value={formData.liveDemo}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Team Members */}
                    <motion.input
                        type="text"
                        name="teamMembers"
                        placeholder="Team Members (comma separated)"
                        value={formData.teamMembers}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Tags */}
                    <motion.input
                        type="text"
                        name="tags"
                        placeholder="Tags (comma separated)"
                        value={formData.tags}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Challenges */}
                    <motion.textarea
                        name="challenges"
                        placeholder="Challenges"
                        rows={3}
                        value={formData.challenges}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500 col-span-1 md:col-span-2 lg:col-span-3"
                    ></motion.textarea>

                    {/* Solutions */}
                    <motion.textarea
                        name="solutions"
                        placeholder="Solutions"
                        rows={3}
                        value={formData.solutions}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500 col-span-1 md:col-span-2 lg:col-span-3"
                    ></motion.textarea>

                    {/* Testimonials */}
                    <motion.textarea
                        name="testimonials"
                        placeholder="Testimonials"
                        rows={3}
                        value={formData.testimonials}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500 col-span-1 md:col-span-2 lg:col-span-3"
                    ></motion.textarea>

                    {/* Downloads */}
                    <motion.input
                        type="number"
                        name="downloads"
                        placeholder="Downloads"
                        min={0}
                        value={formData.downloads}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Views */}
                    <motion.input
                        type="number"
                        name="views"
                        placeholder="Views"
                        min={0}
                        value={formData.views}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px 3px #a78bfa" }}
                        className="w-full px-5 py-3 rounded-lg border border-purple-700 bg-gray-800 text-purple-100 shadow-lg placeholder-purple-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-500"
                    />

                    {/* Submit Button */}
                    <motion.div
                        className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <button
                            type="submit"
                            className="px-8 py-3 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white font-bold rounded-lg shadow-xl
                hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600 transition duration-300 transform hover:scale-105"
                        >
                            Add Project
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddProjects;
