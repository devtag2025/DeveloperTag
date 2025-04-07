import API from "./AxiosConfig";

// Fetch all testimonials
export const getTestimonials = async (): Promise<any> => {
    try {
        const response = await API.get("/testimonials");
        return response.data;
    } catch (error: any) {
        console.error(
            "Error fetching testimonials:",
            error.response?.data || error.message
        );
        throw new Error(
            error.response?.data?.message || "Failed to load testimonials."
        );
    }
};



