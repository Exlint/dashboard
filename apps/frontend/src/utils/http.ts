import axios from 'axios';

export const backendApi = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const cliBackendApi = axios.create({
	baseURL: import.meta.env.VITE_CLI_BACKEND_URL,
});

export const temporaryCliServerApi = axios.create();
