import axios from 'axios';

export const backendApi = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const cliBackendApi = axios.create({
	baseURL: process.env.REACT_APP_CLI_BACKEND_URL,
});
