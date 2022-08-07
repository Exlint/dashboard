import { useState, useEffect, useRef } from 'react';

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
