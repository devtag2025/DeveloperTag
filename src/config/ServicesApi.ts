// serviceApi.ts

import API from "./AxiosConfig";

export interface Service {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
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

export interface ApiParams {
    page?: number;
    limit?: number;
    search?: string;
}

export const getServices = async (params?: ApiParams): Promise<ServiceResponse> => {
    try {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.append('page', params.page.toString());
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        if (params?.search) queryParams.append('search', params.search);

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