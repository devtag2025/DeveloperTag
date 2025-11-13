import API from "./AxiosConfig";

// Updated interface for the new portfolio model
export interface PortfolioProject {
    _id: string;
    name: string;
    description: string;
    cost: string;
    image: string;
    url: string;
    category: string;
    featured: boolean;
    displayOrder: number;
    createdAt: string;
    updatedAt: string;
}

export interface PortfolioCategory {
    title: string;
    slug: string;
    projects: PortfolioProject[];
}

export interface GroupedPortfoliosResponse {
    categories: PortfolioCategory[];
    total: number;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

// Get portfolios grouped by category
export const getPortfoliosGroupedByCategory = async (): Promise<ApiResponse<GroupedPortfoliosResponse>> => {
    try {
        const response = await API.get("/portfolio/public/grouped");
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching grouped portfolios:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load portfolios.");
    }
};

// Get portfolios by category
export const getPortfoliosByCategory = async (category: string): Promise<ApiResponse<{ category: string; items: PortfolioProject[] }>> => {
    try {
        const response = await API.get(`/portfolio/public/category/${category}`);
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching portfolios by category:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load portfolios.");
    }
};

// Get featured portfolios
export const getFeaturedPortfolios = async (): Promise<ApiResponse<PortfolioProject[]>> => {
    try {
        const response = await API.get("/portfolio/public/featured");
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching featured portfolios:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load featured portfolios.");
    }
};

// Get all portfolios (with pagination)
export const getAllPortfolios = async (page = 1, limit = 100): Promise<ApiResponse<{ items: PortfolioProject[]; pagination: any }>> => {
    try {
        const response = await API.get("/portfolio/public", { params: { page, limit } });
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching all portfolios:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load portfolios.");
    }
};



