import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaImage } from "react-icons/fa";
import useContact from "../Hooks/useContact";
import Loading from "../Common/Loading";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddContact = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");

    const { data, isPending, isError, refetch } = useContact();

    // Set default values when data is fetched
    useEffect(() => {
        if (data && data.length > 0) {
            const info = data[0];
            setName(info.name || "");
            setEmail(info.email || "");
            setPhone(info.phone || "");
            setGithub(info.github || "");
            setLinkedin(info.linkedin || "");
            setAddress(info.address || "");
            setImage(info.image || "");
        }
    }, [data]);

    const mainContactData = { name, email, phone, github, linkedin, address, image };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = data[0]._id;
        setLoading(true);
        axios.patch(`http://localhost:5000/update_contact_information/${id}`, mainContactData)
            .then((res) => {
                toast.success("Contact information updated!");
                Swal.fire({
                    title: "Update Contact Information Successfully!",
                    icon: "success",
                    draggable: true,
                    showConfirmButton: false,
                    timer: 1500
                });
                setLoading(false);
                refetch();
            })
            .catch((error) => {
                toast.error("Something went wrong. Try again later.");
                console.error("Submission error:", error);
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700 flex items-center justify-center py-10 px-4">
            {isPending ? (
                <Loading />
            ) : (
                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 backdrop-blur-sm bg-white/10 rounded-xl shadow-xl border border-white/20 p-6">
                    {/* Left: Form */}
                    <div className="p-4">
                        <h2 className="text-3xl text-white font-bold mb-6 text-center drop-shadow-md">
                            Add Contact Info
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="text-white font-medium block mb-1">Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-pink-400 transition"
                                />
                            </div>
                            <div>
                                <label className="text-white font-medium block mb-1">Phone</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text"
                                    placeholder="Enter your phone"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-orange-400 transition"
                                />
                            </div>
                            <div>
                                <label className="text-white font-medium block mb-1">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-blue-400 transition"
                                />
                            </div>
                            <div>
                                <label className="text-white font-medium block mb-1">GitHub</label>
                                <input
                                    value={github}
                                    onChange={(e) => setGithub(e.target.value)}
                                    type="text"
                                    placeholder="Enter GitHub link"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-violet-400 transition"
                                />
                            </div>
                            <div>
                                <label className="text-white font-medium block mb-1">LinkedIn</label>
                                <input
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    type="text"
                                    placeholder="Enter LinkedIn link"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-cyan-400 transition"
                                />
                            </div>
                            <div>
                                <label className="text-white font-medium block mb-1">Address</label>
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    placeholder="Enter your address"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-green-400 transition"
                                />
                            </div>
                            <div>
                                <label className="text-white font-medium block mb-1">Profile Image Link</label>
                                <input
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    type="text"
                                    placeholder="Paste image URL here"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-yellow-400 transition"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-2 rounded-lg shadow-md transition duration-300"
                            >
                                {loading ? "Submitting..." : "Save Contact Info"}
                            </button>
                        </form>
                    </div>

                    {/* Right: Live Profile Preview */}
                    <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white shadow-md flex flex-col items-center text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 mb-4 shadow-md">
                            {image ? (
                                <img src={image} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-white/20 text-gray-300 text-sm">
                                    <FaImage className="text-2xl" />
                                </div>
                            )}
                        </div>
                        <h2 className="text-xl font-bold mb-1">{name || "Your Name"}</h2>
                        <p className="text-sm text-gray-200 mb-4">{email || "Your Email"}</p>
                        <div className="space-y-2 w-full text-left text-sm md:text-base">
                            <p><FaPhone className="inline mr-2 text-orange-300" /> <strong>Phone:</strong> {phone || "N/A"}</p>
                            <p><FaGithub className="inline mr-2 text-gray-300" /> <strong>GitHub:</strong> {github || "N/A"}</p>
                            <p><FaLinkedin className="inline mr-2 text-cyan-300" /> <strong>LinkedIn:</strong> {linkedin || "N/A"}</p>
                            <p><FaMapMarkerAlt className="inline mr-2 text-green-300" /> <strong>Address:</strong> {address || "N/A"}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddContact;
