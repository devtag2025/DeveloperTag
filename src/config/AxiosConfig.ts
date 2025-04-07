import axios from "axios";

// Create an Axios instance
const API = axios.create({
    baseURL: "http://localhost:8000/api/v1/", // Adjust the base URL if necessary
    withCredentials: true, // Enable sending cookies with requests
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor: Optionally attach token from localStorage as Bearer token.
// Note: Since your backend is using cookies for authentication, this may not be necessary.
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle responses or errors globally if needed.
API.interceptors.response.use(
    (response) => response,
    (error) => {
        // Optionally, you can handle specific status codes globally here.
        return Promise.reject(error);
    }
);

export default API;