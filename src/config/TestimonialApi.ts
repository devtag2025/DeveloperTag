// testimonialApi.ts

import API from "./AxiosConfig";

export interface Testimonial {
    _id: string;
    content: string;
    name: string;
    // title: string;
    category?: string;
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

export interface TestimonialResponse {
    success: boolean;
    data: {
        items: Testimonial[];
        pagination: PaginationInfo;
    };
    message: string;
}

export interface ApiParams {
    page?: number;
    limit?: number;
    search?: string;
}

export const getTestimonials = async (): Promise<TestimonialResponse> => {
    try {
        const response = await API.get("/testimonials/all-testimonial");
        return response.data;
    } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } }; message?: string };
        console.error("Error fetching testimonials:", err.response?.data || err.message);
        throw new Error(err.response?.data?.message || "Failed to load testimonials.");
    }
};
  