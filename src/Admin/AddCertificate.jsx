import { useState } from "react";
import { FaUniversity, FaRegCalendarAlt, FaRegFileAlt, FaImage, FaAward } from "react-icons/fa";
import useCertificates from "../Hooks/useCertificates";

const AddCertificate = () => {
    const [name, setName] = useState("");
    const [institution, setInstitution] = useState("");
    const [details, setDetails] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    // get all data from the custom hooks by tanstact query--->
    const { data, isPending, refetch, isError } = useCertificates()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const certificateData = { name, institution, details, issueDate, image };

        // You can replace the below with your axios.post or patch call
        console.log("Submitted certificate data:", certificateData);



    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 backdrop-blur-sm bg-white/10 rounded-xl shadow-xl border border-white/20 p-6">
                {/* Left: Form */}
                <div className="p-4">
                    <h2 className="text-3xl text-white font-bold mb-6 text-center drop-shadow-md">
                        Add Certificate Info
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="text-white font-medium block mb-1">Certificate Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Certificate Title"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-pink-400 transition"
                            />
                        </div>
                        <div>
                            <label className="text-white font-medium block mb-1">Institution</label>
                            <input
                                value={institution}
                                onChange={(e) => setInstitution(e.target.value)}
                                type="text"
                                placeholder="Issuing Institution"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                        <div>
                            <label className="text-white font-medium block mb-1">Details</label>
                            <textarea
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                placeholder="Certificate details"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-violet-400 transition"
                            />
                        </div>
                        <div>
                            <label className="text-white font-medium block mb-1">Issue Date</label>
                            <input
                                value={issueDate}
                                onChange={(e) => setIssueDate(e.target.value)}
                                type="date"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-green-400 transition"
                            />
                        </div>
                        <div>
                            <label className="text-white font-medium block mb-1">Certificate Image Link</label>
                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                type="text"
                                placeholder="Paste image URL"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-yellow-400 transition"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-2 rounded-lg shadow-md transition duration-300"
                        >
                            {loading ? "Submitting..." : "Save Certificate"}
                        </button>
                    </form>
                </div>

                {/* Right: Preview */}
                <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white shadow-md flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-pink-400 mb-4 shadow-md">
                        {image ? (
                            <img src={image} alt="Certificate" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-white/20 text-gray-300 text-sm">
                                <FaImage className="text-2xl" />
                            </div>
                        )}
                    </div>
                    <h2 className="text-xl font-bold mb-1">{name || "Certificate Title"}</h2>
                    <p className="text-sm text-gray-200 mb-4">{institution || "Institution Name"}</p>
                    <div className="space-y-2 w-full text-left text-sm md:text-base">
                        <p><FaRegFileAlt className="inline mr-2 text-pink-300" /> <strong>Details:</strong> {details || "Details about the certificate."}</p>
                        <p><FaRegCalendarAlt className="inline mr-2 text-yellow-300" /> <strong>Issued:</strong> {issueDate || "YYYY-MM-DD"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCertificate;
