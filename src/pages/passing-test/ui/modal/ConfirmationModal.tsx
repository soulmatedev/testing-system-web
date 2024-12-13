import React from 'react';
import css from './ConfirmationModal.module.scss';
import { MainButton } from '../../../../shared/ui/button';

interface ConfirmationModalProps {
	isOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
	message: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
	isOpen,
	onConfirm,
	onCancel,
	message,
}) => {
	if (!isOpen) return null;

	return (
		<div className={css.modalOverlay}>
			<div className={css.modalContent}>
				<p className={css.message}>{message}</p>
				<div className={css.buttons}>
					<MainButton
						onClick={onConfirm}
						width={70}
						height={34}
						text="Да"
					/>
					<MainButton
						onClick={onConfirm}
						width={70}
						height={34}
						text="Нет"
					/>
				</div>
			</div>
		</div>
	);
};
