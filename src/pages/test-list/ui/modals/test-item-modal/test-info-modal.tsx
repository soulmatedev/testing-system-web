import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './test-info-modal.module.scss';
import { Modal } from '../../../../../shared/ui/modal';
import { SecondButton } from '../../../../../shared/ui/second-button';
import { MainButton } from '../../../../../shared/ui/main-button';
import { ConfirmationModal } from '../../../../passing-test/ui/modal';
import { useDeleteTest } from '../../../hooks/useDeleteTest';

interface SelectQuestionsModalProps {
	id: number | null,
	name: string,
	description: string,
	status: string,
	active: boolean,
	closeFunc: (active: boolean) => void,
}

export const TestInfoModal = (props: SelectQuestionsModalProps) => {
	const {
		id,
		name,
		description,
		status,
		active,
		closeFunc,
	} = props;

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [testToDelete, setTestToDelete] = useState<number | null>(null);

	const { onDeleteTest } = useDeleteTest();

	const navigate = useNavigate();

	const handleDeleteClick = (id: number) => {
		setTestToDelete(id);
		setIsDeleteModalOpen(true);
	};

	const confirmDelete = async () => {
		if (testToDelete !== null) {
			await onDeleteTest(testToDelete);
		}
		setIsDeleteModalOpen(false);
		setTestToDelete(null);
	};

	const cancelDelete = () => {
		setIsDeleteModalOpen(false);
		setTestToDelete(null);
	};

	const handleNavigateToTest = () => {
		navigate(`/test/${id}`);
	};

	return (
		<>
			<Modal
				active={active}
				closeFunc={closeFunc}
			>
				<div className={css.wrapper}>
					<div>
						<p className={css.title}>Название</p>
						<h1 className={css.name}>{name}</h1>
					</div>

					<div>
						<p className={css.title}>Описание</p>
						<h1 className={css.description}>{description}</h1>
					</div>

					<div>
						<p className={css.title}>Статус</p>
						<h1 className={css.status}>{status}</h1>
					</div>

					<div className={css.options}>
						<SecondButton
							text="Удалить"
							height={32}
							onClick={() => handleDeleteClick(id!)}
						/>
						<MainButton
							text="Перейти к тесту"
							height={32}
							onClick={handleNavigateToTest}
						/>
					</div>
				</div>
			</Modal>
			<ConfirmationModal
				isOpen={isDeleteModalOpen}
				onConfirm={confirmDelete}
				onCancel={cancelDelete}
				message="Вы уверены, что хотите удалить этот тест?"
			/>
		</>
	);
};
