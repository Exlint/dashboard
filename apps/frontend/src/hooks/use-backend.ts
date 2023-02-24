import useSWR from 'swr';

import { fetcher } from '@/utils/http-backend';

const useBackend = <D, E = unknown>(path: string | null) => {
	const { data, error, isLoading, mutate } = useSWR<D, E>(path, fetcher);

	return { data, error, isLoading, mutate };
};

export default useBackend;
