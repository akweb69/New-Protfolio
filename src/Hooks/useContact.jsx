import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Query function
const fetchContactInfo = async () => {
    const response = await axios.get("http://localhost:5000/contact_info_get");
    return response.data;
};

// Custom hook
const useContact = () => {
    return useQuery({
        queryKey: ["contactInfo"],
        queryFn: fetchContactInfo,
    });
};

export default useContact;
