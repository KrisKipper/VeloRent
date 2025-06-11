import axios from 'axios';

export const BASE_URL = 'https://sf-final-project-be.herokuapp.com/api';

export const instance = axios.create({
    baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
