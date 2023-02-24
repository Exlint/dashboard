import { useCallback, useContext } from 'react';

import type { FallbackType } from '../helpers/FallbackProvider/interfaces/types';
import { FallbackContext } from '../helpers/FallbackProvider/context/fallback';

export const usePage = () => {
	const { updateFallback } = useContext(FallbackContext);

	const onLoad = useCallback(
		(component: FallbackType | undefined) => {
			if (component === undefined) {
				component = null;
			}

			updateFallback(component);
		},
		[updateFallback],
	);

	return { onLoad };
};
