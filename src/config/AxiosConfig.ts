import axios from "axios";

// Create an Axios instance
const API = axios.create({
    baseURL: "https://developer-tag-backend-wz59.vercel.app/api/v1", // Adjust the base URL if necessary

});


export default API;