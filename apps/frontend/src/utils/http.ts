import axios from 'axios';

export const backendApiAxios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
});
