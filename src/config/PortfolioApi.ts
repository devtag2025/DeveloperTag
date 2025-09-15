import API from "./AxiosConfig";

export interface TechItem {
    tech: string;
}

export interface PortfolioItem {
    _id: string;
    slug: string;
    title: string;
    tagLine: string;
    projectScopeDescription?: string;
    techStack: TechItem[];
    previewImage: string;
    websiteDemo?: string;
    mobileDemo?: string;
    adminPanelImage?: string;
    user?: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}

export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export interface PortfolioApiResponse {
    success: boolean;
    message: string;
    data: {
        items: PortfolioItem[];
        pagination: PaginationMeta;
    };
}

export interface GetPortfoliosParams {
    page?: number;
    limit?: number;
}

export const getPortfolios = async (
    params: GetPortfoliosParams = {}
): Promise<PortfolioApiResponse> => {
    try {
        const response = await API.get("/portfolio/all-portfolio", { params });
        return response.data as PortfolioApiResponse;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching portfolios:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load portfolios.");
    }
};



