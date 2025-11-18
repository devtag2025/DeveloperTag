import axios from "axios";

// Create an Axios instance
const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1", // Adjust the base URL if necessary

});


export default API;