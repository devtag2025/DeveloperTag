import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://developer-tag-backend.vercel.app/api/v1",
});

export default API;