import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddGellery = () => {
    const [imageFiles, setImageFiles] = useState([null]);
    const [imageLinks, setImageLinks] = useState([""]);
    const [uploading, setUploading] = useState([]);
    const [uploadDisabled, setUploadDisabled] = useState([]);
    const [loading, setLoading] = useState(false);

    const imgbbApiKey = import.meta.env.VITE_IMGBB_API;

    const handleFileChange = (index, file) => {
        const updatedFiles = [...imageFiles];
        updatedFiles[index] = file;
        setImageFiles(updatedFiles);
    };

    const handleAddField = () => {
        setImageFiles([...imageFiles, null]);
        setImageLinks([...imageLinks, ""]);
        setUploading([...uploading, false]);
        setUploadDisabled([...uploadDisabled, false]);
    };

    const handleImageUpload = async (index) => {
        const file = imageFiles[index];
        if (!file) return toast.error("Select file first!");

        const newUploading = [...uploading];
        newUploading[index] = true;
        setUploading(newUploading);

        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await res.json();
            if (data.success) {
                const updatedLinks = [...imageLinks];
                updatedLinks[index] = data.data.url;
                setImageLinks(updatedLinks);

                const updatedDisabled = [...uploadDisabled];
                updatedDisabled[index] = true;
                setUploadDisabled(updatedDisabled);

                toast.success("Image uploaded successfully!");
            } else {
                toast.error("Image upload failed.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Error uploading image.");
        } finally {
            const newUploading = [...uploading];
            newUploading[index] = false;
            setUploading(newUploading);
        }
    };

    // send all images links to database from the client site by server api--->
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // send the data--->
        axios.patch("http://localhost:5000/add_gellery_images", imageLinks)
            .then(res => {
                console.log("response data:", res.data);
                toast.success("✅ Images Uploaded Successfully!");
                setLoading(false)
            })
            .catch(error => {
                console.error("error:", error);
                toast.error("❌ Something went wrong");
            });


    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 p-6">
                {/* Left Section */}
                <div className="w-full">
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 text-center drop-shadow-md">
                        Add Gallery Images
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {imageFiles.map((file, index) => (
                            <div key={index} className="space-y-1">
                                <label className="text-white font-medium block">
                                    Image {index + 1}
                                </label>
                                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            handleFileChange(index, e.target.files[0])
                                        }
                                        className="flex-1 px-3 py-2 bg-white/10 text-white border border-white/30 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-white hover:file:bg-yellow-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleImageUpload(index)}
                                        disabled={uploading[index] || uploadDisabled[index]}
                                        className={`px-4 py-2 rounded-md shadow-md transition text-white font-medium ${uploadDisabled[index]
                                            ? "bg-green-600 cursor-not-allowed"
                                            : uploading[index]
                                                ? "bg-gray-500"
                                                : "bg-yellow-500 hover:bg-yellow-600"
                                            }`}
                                    >
                                        {uploading[index]
                                            ? "Uploading..."
                                            : uploadDisabled[index]
                                                ? "Uploaded"
                                                : "Upload"}
                                    </button>
                                </div>
                                {imageLinks[index] && (
                                    <p className="text-green-300 text-sm break-all">
                                        ✅ Uploaded
                                    </p>
                                )}
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={handleAddField}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-2 rounded-lg shadow-md transition duration-300"
                        >
                            + Add More Image
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full mt-3 ${loading
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
                                } text-white font-bold py-2 rounded-lg shadow-md transition duration-300`}
                        >
                            {loading ? "Submitting..." : "Save Gallery"}
                        </button>
                    </form>
                </div>

                {/* Right Section */}
                <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white shadow-md flex flex-col">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                        Image Preview
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto max-h-[480px]">
                        {imageLinks.map(
                            (link, index) =>
                                link && (
                                    <img
                                        key={index}
                                        src={link}
                                        alt={`preview-${index}`}
                                        className="w-full h-32 object-cover border rounded-md shadow"
                                        onError={(e) => {
                                            e.target.src =
                                                "https://via.placeholder.com/150?text=Invalid+Image";
                                        }}
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddGellery;
