import useSWR from 'swr';

const fetcher = async (path: string) => {
	const token = sessionStorage.getItem('token');

	const res = await fetch(path, {
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

const useBackend = <D, E = unknown>(path: string) => {
	const requestPath = import.meta.env.VITE_BACKEND_URL + path;

	const { data, error, isLoading, mutate } = useSWR<D, E>(requestPath, fetcher);

	return { data, error, isLoading, mutate };
};

export default useBackend;
