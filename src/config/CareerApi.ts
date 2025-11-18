import API from "./AxiosConfig";

// Career Position interface
export interface CareerPosition {
    _id: string;
    title: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

// Get active careers (public endpoint)
export const getActiveCareers = async (): Promise<ApiResponse<CareerPosition[]>> => {
    try {
        const response = await API.get("/careers/public");
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching active careers:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load career positions.");
    }
};

// Get single career by ID (public endpoint)
export const getCareerById = async (id: string): Promise<ApiResponse<CareerPosition>> => {
    try {
        const response = await API.get(`/careers/public/${id}`);
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching career:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load career position.");
    }
};

