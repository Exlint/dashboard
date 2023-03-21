import useSWR, { type KeyedMutator } from 'swr';
import { useCallback } from 'react';

import BackendService from '@/services/backend';

const useBackend = <D, E = unknown>(path: string | null) => {
	const { data, error, isLoading, mutate } = useSWR<D, E>(path, BackendService.get);

	const postMutation: KeyedMutator<D> = useCallback(
		async (mutationData, options) => {
			const data = await mutate(mutationData, options);

			await mutate();

			return data;
		},
		[mutate],
	);

	return { data, error, isLoading, mutate: postMutation };
};

export default useBackend;
