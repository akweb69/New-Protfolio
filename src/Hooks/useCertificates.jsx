import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const fetchCirtificatesData = async () => {
    const response = await axios.get("http://localhost:5000/all_certificates")
    return (response.data)
}

// custom hooks--->
const useCertificates = () => {
    return useQuery({
        queryKey: ["certificatesData"],
        queryFn: fetchCirtificatesData(),
    })
}
// export the main hooks --->
export default useCertificates
