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

export const getTestimonials = async () => {
    try {
      const response = await fetch(
        "https://developer-tag-backend-wz59.vercel.app/api/v1/testimonials/all-testimonial",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          
        }
      );
  
      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || `Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      const err = error as Error;
      console.error("Error fetching testimonials:", err.message);
      throw new Error("Failed to load testimonials.");
    }
  };
  