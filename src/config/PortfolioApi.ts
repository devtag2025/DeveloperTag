import API from "./AxiosConfig";


// Fetch all portfolios
export const getPortfolios = async (): Promise<any> => {
    try {
        const response = await API.get("/portfolio");
        return response.data;
    } catch (error: any) {
        console.error(
            "Error fetching portfolios:",
            error.response?.data || error.message
        );
        throw new Error(
            error.response?.data?.message || "Failed to load portfolios."
        );
    }
};



