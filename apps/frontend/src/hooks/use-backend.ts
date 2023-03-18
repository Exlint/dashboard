import useSWR from 'swr';

import BackendService from '@/services/backend';

const useBackend = <D, E = unknown>(path: string | null) => {
	const { data, error, isLoading, mutate } = useSWR<D, E>(path, BackendService.get);

	return { data, error, isLoading, mutate };
};

export default useBackend;
