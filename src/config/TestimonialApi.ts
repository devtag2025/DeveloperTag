import API from "./AxiosConfig";

// Fetch all testimonials
type TestimonialsResponse = unknown;
export const getTestimonials = async (): Promise<TestimonialsResponse> => {
    try {
        const response = await API.get("/testimonials");
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error(
            "Error fetching testimonials:",
            err.response?.data || err.message
        );
        throw new Error(
            err.response?.data?.message || "Failed to load testimonials."
        );
    }
};



