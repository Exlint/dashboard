import { createContext } from 'react';

import type { FallbackContextType } from '../interfaces/types';

export const FallbackContext = createContext<FallbackContextType>({
	updateFallback: () => {
		return;
	},
});
