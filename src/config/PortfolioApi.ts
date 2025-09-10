import API from "./AxiosConfig";


// Fetch all portfolios
type PortfolioResponse = unknown;
export const getPortfolios = async (): Promise<PortfolioResponse> => {
    try {
        const response = await API.get("/portfolio");
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error(
            "Error fetching portfolios:",
            err.response?.data || err.message
        );
        throw new Error(
            err.response?.data?.message || "Failed to load portfolios."
        );
    }
};



