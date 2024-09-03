import axios from "axios";

const APIendpoints = axios.create({
    baseURL: 'https://api.breakingbadquotes.xyz/v1/',
    timeout: 1000, // Optional: Set a timeout for requests
    headers: { 'Content-Type': 'application/json' }
});

export default APIendpoints;
