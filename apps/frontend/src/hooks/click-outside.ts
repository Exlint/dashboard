import { useState, useEffect, useRef } from 'react';

/**
 * The hook receives the initial visibility and returns an object to use for visibility control
 * @param initialIsVisible the initial visibility
 * @returns an object of ref, visible state and toggle visibility to use
 */
export const useClickOutside = <T extends HTMLElement>(initialIsVisible: boolean) => {
	const ref = useRef<T>(null);
	const [isVisibleState, setIsVisibleState] = useState<boolean>(initialIsVisible);

	const toggleVisibility = () => setIsVisibleState((prev) => !prev);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsVisibleState(() => false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		return () => document.removeEventListener('click', handleClickOutside, true);
	}, []);

	return { ref, isVisible: isVisibleState, toggleVisibility };
};
