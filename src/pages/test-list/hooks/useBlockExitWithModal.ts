import { useEffect } from 'react';

type UseBlockExitWithModalProps = {
	shouldBlock: boolean;
	onTrigger: () => void;
};

export const useBlockExitWithModal = ({ shouldBlock, onTrigger }: UseBlockExitWithModalProps) => {
	useEffect(() => {
		if (!shouldBlock) return;

		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			e.returnValue = '';
		};

		const handlePopState = (e: PopStateEvent) => {
			e.preventDefault();
			onTrigger();
			window.history.pushState(null, '', window.location.pathname);
		};

		window.addEventListener('beforeunload', handleBeforeUnload);
		window.addEventListener('popstate', handlePopState);
		window.history.pushState(null, '', window.location.pathname);

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
			window.removeEventListener('popstate', handlePopState);
		};
	}, [shouldBlock]);
};
