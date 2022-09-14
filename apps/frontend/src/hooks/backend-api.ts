// * Hook logic is inspired by https://stackoverflow.com/questions/63118511/custom-http-hook-using-axios

import { useState } from 'react';
import axios, { type AxiosResponse, type AxiosError, type AxiosRequestHeaders, type Method } from 'axios';

interface IHTTPResponeData {}

interface IHookResponse<T extends IHTTPResponeData> {
	response: AxiosResponse<T> | null;
	error: AxiosError | null;
	loading: boolean;
	request: () => Promise<VoidFunction>;
}

const backendInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
});

/**
 * The hook receives the request configuration and returns an object to use a request against the backend
 * @param url the url segment to send the request to
 * @param method the method to use
 * @param body the request body
 * @param headers the request headers
 * @param timeout the request timeout
 * @returns an object of response, error, loading state and request to use
 */
const useBackend = <T extends IHTTPResponeData>(
	url: string,
	method: Extract<Method, 'GET' | 'POST'>,
	body?: object,
	headers?: AxiosRequestHeaders,
	timeout?: number,
): IHookResponse<T> => {
	const HTTPTimeout = timeout ?? 8000;

	const [responseState, setResponseState] = useState<AxiosResponse<T> | null>(null);
	const [errorState, setErrorState] = useState<AxiosError | null>(null);
	const [loadingState, setLoadingState] = useState<boolean>(false);

	const request = async () => {
		setLoadingState(() => true);

		// Get a source in-order to cancel the request when hook is being unmounted
		const axiosSource = axios.CancelToken.source();

		try {
			if (method === 'GET') {
				const response = await backendInstance.get<T>(url, {
					cancelToken: axiosSource.token,
					timeout: HTTPTimeout,
					headers,
				});

				setResponseState(() => response);
				setLoadingState(() => false);
			} else if (method === 'POST') {
				const response = await backendInstance.post<T>(url, body, {
					cancelToken: axiosSource.token,
					timeout: HTTPTimeout,
					headers,
				});

				setResponseState(() => response);
				setLoadingState(() => false);
			}
		} catch (error) {
			// Update the state only if the hook isn't being unmounted
			if (!axios.isCancel(error)) {
				setErrorState(() => error as AxiosError);
				setLoadingState(() => false);
			}
		}

		// In case the hook is being unmounted - cancel the request
		return () => axiosSource.cancel();
	};

	return { response: responseState, error: errorState, loading: loadingState, request };
};

export default useBackend;
