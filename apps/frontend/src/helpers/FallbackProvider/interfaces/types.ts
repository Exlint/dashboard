import type { ReactNode } from 'react';

export type FallbackType = NonNullable<ReactNode> | null;

export interface FallbackContextType {
	updateFallback: (fallback: FallbackType) => void;
}
