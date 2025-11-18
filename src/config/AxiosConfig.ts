import axios from "axios";

// Create an Axios instance
const API = axios.create({
    baseURL: "https://admin.developertag.com//api/v1" // Adjust the base URL if necessary

});

export default API;