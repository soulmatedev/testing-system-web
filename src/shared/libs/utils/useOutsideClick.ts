import { useEffect, useRef } from 'react';

export const useOutSideClick = (onOutsideClick: () => void, modalInModalActive?: boolean) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node) && !modalInModalActive) {
				onOutsideClick();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => document.removeEventListener('click', handleClickOutside);
	}, [onOutsideClick, modalInModalActive]);

	return ref;
};
