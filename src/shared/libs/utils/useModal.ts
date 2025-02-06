import { useEffect, useRef } from 'react';
import { useOutSideClick } from './useOutsideClick';

export const useModal = (
	setActive: (value: boolean) => void,
	isActive: boolean,
	modalInModalActive?: boolean,
) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const modalContentRef = useOutSideClick(() => setActive(false), modalInModalActive);

	useEffect(() => {
		const handleEscapeKey = (e: KeyboardEvent) => {
			if (e.code === 'Escape' && isActive && !modalInModalActive) {
				setActive(false);
			}
		};

		document.addEventListener('keydown', handleEscapeKey);

		return () => document.removeEventListener('keydown', handleEscapeKey);
	}, [isActive, modalInModalActive]);

	useEffect(() => {
		if (isActive || modalInModalActive) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [isActive, modalInModalActive]);

	return {
		modalContentRef,
		modalRef,
	};
};
