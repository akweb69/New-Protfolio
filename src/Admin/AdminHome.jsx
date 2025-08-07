import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminNav from './AdminNav';
import Footer from '../Common/Footer';

const AdminHome = () => {
    const location = useLocation()
    const [heading, setHeading] = useState("")
    //    get location and update the heading of admin dashboard page-->
    useEffect(() => {
        if (location.pathname === "/admin_dashboard") {
            setHeading("Add Your New Projects")
        }
        if (location.pathname === "/admin_dashboard/add_contact_info") {
            setHeading("Add Contact Info.")
        }
        if (location.pathname === "/admin_dashboard/add_resume_link") {
            setHeading("Add Resume Info.")
        }
        if (location.pathname === "/admin_dashboard/add_certificates_info") {
            setHeading("Add Certificate Info.")
        }
        if (location.pathname === "/admin_dashboard/add_gellery_info") {
            setHeading("Add Gellery Info.")
        }
        if (location.pathname === "/admin_dashboard/add_achievement_info") {
            setHeading("Add Achievement Info.")
        }
    }, [])

    return (
        <div className='w-full min-h-screen bg-gray-200'>
            {/* heading title  */}
            <AdminNav></AdminNav>
            <div className=""></div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdminHome;