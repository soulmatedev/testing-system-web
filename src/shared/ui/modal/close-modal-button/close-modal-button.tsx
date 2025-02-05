import React from 'react';
import css from './close-modal-button.module.scss';

interface CloseModalButtonProps {
	onClose: () => void,
	className?: string,
}

export const CloseModalButton: React.FC<CloseModalButtonProps> = ({
	onClose,
	className,
}: CloseModalButtonProps) => {
	const closeClass = className || css.close;

	return (
		<div
			onClick={onClose}
			className={closeClass}
			role="presentation"
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18 6L6 18M6 6L18 18"
					stroke="#C2C2C2"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};
