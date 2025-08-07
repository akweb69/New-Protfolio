import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import {
    FaProjectDiagram,
    FaAddressBook,
    FaLink,
    FaCertificate,
    FaImages,
    FaAward,
    FaCog,
    FaTools
} from "react-icons/fa";

const AdminNav = () => {
    const [adminHeader, setAdminHeader] = useState("Admin Dashboard");
    const [menuBar, setMenuBar] = useState(false);
    const location = useLocation();
    const pathName = location.pathname;

    useEffect(() => {
        if (pathName === "/admin_dashboard") setAdminHeader("Add Project");
        else if (pathName === "/admin_dashboard/add_contact_info") setAdminHeader("Add Contact");
        else if (pathName === "/admin_dashboard/add_resume_link") setAdminHeader("Add Resume");
        else if (pathName === "/admin_dashboard/add_certificates_info") setAdminHeader("Add Certificates");
        else if (pathName === "/admin_dashboard/add_gellery_info") setAdminHeader("Add Gellery Images");
        else if (pathName === "/admin_dashboard/add_achievement_info") setAdminHeader("Add Achievement");
        else if (pathName === "/admin_dashboard/add_skills") setAdminHeader("Add Skills");
        else setAdminHeader("Admin Dashboard");
    }, [pathName]);

    const navLinksData = [
        { id: 1, name: "Add Project", link: "/admin_dashboard", icon: <FaProjectDiagram /> },
        { id: 2, name: "Add Contact Info", link: "/admin_dashboard/add_contact_info", icon: <FaAddressBook /> },
        { id: 3, name: "Add Resume", link: "/admin_dashboard/add_resume_link", icon: <FaLink /> },
        { id: 4, name: "Add Certificates", link: "/admin_dashboard/add_certificates_info", icon: <FaCertificate /> },
        { id: 5, name: "Add Gellery Images", link: "/admin_dashboard/add_gellery_info", icon: <FaImages /> },
        { id: 6, name: "Add Achievement", link: "/admin_dashboard/add_achievement_info", icon: <FaAward /> },
        { id: 7, name: "Settings", link: "/admin_dashboard/settings", icon: <FaCog /> },
        { id: 8, name: "Add Skills", link: "/admin_dashboard/add_skills", icon: <FaTools /> },
    ];

    return (
        <div className="w-full bg-gray-900 text-white shadow-md">
            {/* Top Header */}
            <div className="w-full border-b border-indigo-800 bg-gray-950">
                <div className="w-11/12 mx-auto h-16 flex justify-between items-center">
                    <div className="text-xl md:text-2xl font-semibold text-pink-500">{adminHeader}</div>
                    <div
                        onClick={() => setMenuBar(!menuBar)}
                        className="text-3xl text-pink-600 cursor-pointer"
                    >
                        {menuBar ? <IoClose /> : <GiHamburgerMenu />}
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            {menuBar && (
                <div className="w-11/12 mx-auto py-6 gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                    {navLinksData.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            onClick={() => setMenuBar(false)}
                            className="flex flex-col items-center justify-center gap-3 p-5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-pink-600 shadow-lg rounded-xl transition duration-300"
                        >
                            <div className="text-3xl text-purple-400 group-hover:scale-110 transition">{item.icon}</div>
                            <div className="text-base font-semibold text-gray-200">{item.name}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminNav;
