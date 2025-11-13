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
        // Use the same base URL as AxiosConfig for consistency
        const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://developer-tag-backend-wz59.vercel.app/api/v1";
        // Slug should be URL-safe already (e.g., "web-development"), no need to encode
        const url = `${baseURL}/services/slug/${slug}`;
        
        console.log(`[getServiceBySlugServer] Fetching service with slug: ${slug} from URL: ${url}`);
        
        const response = await fetch(url, {
            cache: 'no-store', // Always fetch fresh data
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        console.log(`[getServiceBySlugServer] Response status: ${response.status} ${response.statusText}`);
        
        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = `Failed to fetch service: ${response.statusText} (${response.status})`;
            try {
                const errorData = JSON.parse(errorText);
                errorMessage = errorData.message || errorMessage;
            } catch {
                // If parsing fails, use the text as error message
                errorMessage = errorText || errorMessage;
            }
            console.error(`[getServiceBySlugServer] Error response:`, errorMessage);
            throw new Error(errorMessage);
        }
        
        const data = await response.json();
        console.log(`[getServiceBySlugServer] Successfully fetched service data`);
        
        // Backend returns { statusCode, data, message, success }
        // We need to return it in the expected format
        if (data.statusCode && data.data) {
            return {
                success: data.success || true,
                data: data.data,
                message: data.message || "Service fetched successfully"
            };
        }
        
        return data;
    } catch (error: unknown) {
        const err = error as { message?: string };
        console.error("[getServiceBySlugServer] Error fetching service by slug:", err.message || error);
        throw new Error(err.message || "Failed to load service.");
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