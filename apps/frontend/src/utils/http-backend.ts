import { preload } from 'swr';

export const fetcher = async (path: string) => {
	const requestPath = import.meta.env.VITE_BACKEND_URL + path;
	const token = sessionStorage.getItem('token');

	const res = await fetch(requestPath, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		throw new Error();
	}

	const resData = await res.json();

	return resData;
};

export const preloader = (path: string) => preload(path, fetcher);
