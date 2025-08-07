import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Homepage from "../Layout/Homepage";
import AdminHome from "../Admin/AdminHome";
import AddContact from "../Admin/AddContact";
import AddProjects from "../Admin/AddProjects";
import AddResumeLink from "../Admin/AddResumeLink";
import AddCertificate from "../Admin/AddCertificate";
import AddGellery from "../Admin/AddGellery";
import AddAcheivement from "../Admin/AddAcheivement";

const router = createBrowserRouter([
    {
        path: "/admin_dashboard",
        element: <AdminHome></AdminHome>,
        children: [
            {
                path: "/admin_dashboard",
                element: <AddProjects></AddProjects>
            },
            {
                path: "/admin_dashboard/add_contact_info",
                element: <AddContact></AddContact>
            },
            {
                path: "/admin_dashboard/add_resume_link",
                element: <AddResumeLink></AddResumeLink>
            },
            {
                path: "/admin_dashboard/add_certificates_info",
                element: <AddCertificate></AddCertificate>
            },
            {
                path: "/admin_dashboard/add_gellery_info",
                element: <AddGellery></AddGellery>
            },
            {
                path: "/admin_dashboard/add_achievement_info",
                element: <AddAcheivement></AddAcheivement>
            }
        ]
    },
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            }
        ]
    }
])

export default router;