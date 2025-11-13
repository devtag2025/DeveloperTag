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

// PortfolioItem interface (for backward compatibility with old structure)
export interface PortfolioItem {
    _id: string;
    title: string;
    tagLine: string;
    slug: string;
    previewImage?: string;
    mobileDemo?: string;
    adminPanelImage?: string;
    techStack?: string[] | Array<{ tech: string }>;
    projectScopeDescription?: string;
    [key: string]: unknown;
}

// PortfolioApiResponse interface
export interface PortfolioApiResponse {
    success: boolean;
    message: string;
    data: {
        items: PortfolioItem[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPrevPage: boolean;
        };
    };
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

// Pagination interface
interface PaginationInfo {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

// Get all portfolios (with pagination)
export const getAllPortfolios = async (page = 1, limit = 100): Promise<ApiResponse<{ items: PortfolioProject[]; pagination: PaginationInfo }>> => {
    try {
        const response = await API.get("/portfolio/public", { params: { page, limit } });
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching all portfolios:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load portfolios.");
    }
};

// getPortfolios function (accepts object parameter for backward compatibility)
export const getPortfolios = async (params: { page?: number; limit?: number } = {}): Promise<PortfolioApiResponse> => {
    const page = params.page || 1;
    const limit = params.limit || 100;
    const response = await getAllPortfolios(page, limit);
    // Map PortfolioProject to PortfolioItem format
    const items: PortfolioItem[] = response.data.items.map((project) => ({
        _id: project._id,
        title: project.name,
        tagLine: project.description,
        slug: project.url || '',
        previewImage: project.image,
        mobileDemo: project.image,
        adminPanelImage: project.image,
        techStack: [],
        projectScopeDescription: project.description,
        // Include other project properties that might be needed
        cost: project.cost,
        category: project.category,
        featured: project.featured,
        displayOrder: project.displayOrder,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt
    }));
    return {
        success: response.success,
        message: response.message,
        data: {
            items,
            pagination: response.data.pagination
        }
    };
};



