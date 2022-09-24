import { useEffect, useCallback, type DependencyList } from 'react';

export const useDebounce = (effect: VoidFunction, dependencies: DependencyList, delay: number) => {
	const callback = useCallback(effect, dependencies);

	useEffect(() => {
		const timeout = setTimeout(callback, delay);

		return () => clearTimeout(timeout);
	}, [callback, delay]);
};
