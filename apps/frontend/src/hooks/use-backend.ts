import useSWR, { type KeyedMutator } from 'swr';
import { useCallback } from 'react';

import BackendService from '@/services/backend';

const useBackend = <D, E = unknown>(path: string | null) => {
	const { data, error, isLoading, mutate } = useSWR<D, E>(path, BackendService.get);

	/**
	 * * Forced mutation is required for synchronization issues,
	 * * as noted here: https://stackoverflow.com/a/75796537/9105207
	 * * The second mutation call uses cache therefore not extra API call network is made
	 */
	const forcedMutation: KeyedMutator<D> = useCallback(
		async (mutationData, options) => {
			const data = await mutate(mutationData, options);

			await mutate();

			return data;
		},
		[mutate],
	);

	return { data, error, isLoading, mutate: forcedMutation };
};

export default useBackend;
