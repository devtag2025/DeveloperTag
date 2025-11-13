// serviceApi.ts

import API from "./AxiosConfig";

export interface WhyChooseItem {
    title: string;
    content: string;
}

export interface Service {
    _id: string;
    title: string;
    slug: string;
    description: string;
    heroImage: string;
    whyChooseSection: {
        title?: string;
        items: WhyChooseItem[];
    };
    category: string;
    createdAt: string;
    updatedAt: string;
}

export interface PaginationInfo {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export interface ServiceResponse {
    success: boolean;
    data: {
        items: Service[];
        pagination: PaginationInfo;
    };
    message: string;
}

export interface SingleServiceResponse {
    success: boolean;
    data: Service;
    message: string;
}

export interface ApiParams {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
}

export const getServices = async (params?: ApiParams): Promise<ServiceResponse> => {
    try {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.append('page', params.page.toString());
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        if (params?.search) queryParams.append('search', params.search);
        if (params?.category) queryParams.append('category', params.category);

        const url = `services/${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const response = await API.get(url);
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error(
            "Error fetching services:",
            err.response?.data || err.message
        );
        throw new Error(
            err.response?.data?.message || "Failed to load services."
        );
    }
};

// Server-side fetch function (for Server Components)
export const getServiceBySlugServer = async (slug: string): Promise<SingleServiceResponse> => {
    try {
        const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
        const response = await fetch(`${baseURL}/services/slug/${slug}`, {
            cache: 'no-store', // Always fetch fresh data
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch service: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error("Error fetching service by slug:", error);
        throw new Error(error.message || "Failed to load service.");
    }
};

export const getServiceBySlug = async (slug: string): Promise<SingleServiceResponse> => {
    try {
        const response = await API.get(`services/slug/${slug}`);
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error(
            "Error fetching service by slug:",
            err.response?.data || err.message
        );
        throw new Error(
            err.response?.data?.message || "Failed to load service."
        );
    }
};  