import API from "./AxiosConfig";

export interface CommonForm {
    name: string;
    email: string;
    description: string;
}

export interface ServiceRequestForm extends CommonForm {
    serviceType: string;
}



export interface NewsletterForm {
    email: string;
}

interface ApiError {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
}

const handleApiError = (error: ApiError): never => {
    const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again.";
    console.error("API Error:", message);
    throw new Error(message);
};

// ---------- Form APIs ----------

export const submitServiceRequest = async (data: ServiceRequestForm) => {
    try {
        const res = await API.post("/forms/service-request", data);
        return res.data;
    } catch (error) {
        handleApiError(error as ApiError);
    }
};

export const submitQuestion = async (data: CommonForm) => {
    try {
        const res = await API.post("/forms/question", data);
        return res.data;
    } catch (error) {
        handleApiError(error as ApiError);
    }
};


// ---------- Newsletter APIs ----------

export const subscribeToNewsletter = async (data: NewsletterForm) => {
    try {
        const res = await API.post("/newsletter/subscribe", data);
        return res.data;
    } catch (error) {
        handleApiError(error as ApiError);
    }
};

export const unsubscribeFromNewsletter = async (data: NewsletterForm) => {
    try {
        const res = await API.post("/newsletter/unsubscribe", data);
        return res.data;
    } catch (error) {
        handleApiError(error as ApiError);
    }
};