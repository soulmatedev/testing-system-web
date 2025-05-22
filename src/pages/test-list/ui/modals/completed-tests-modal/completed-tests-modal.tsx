import React, { useState } from 'react';
import css from './completed-tests-modal.module.scss';
import { Modal } from '../../../../../shared/ui/modal';
import { SecondButton } from '../../../../../shared/ui/second-button';
import { MainButton } from '../../../../../shared/ui/main-button';
import { ConfirmationModal } from '../../../../passing-test/ui/modal';
import { useDeleteTest } from '../../../hooks/useDeleteTest';
import { ResultTestModal } from '../result-test-modal';

interface SelectQuestionsModalProps {
	id: number | null,
	name: string,
	description: string,
	status: string,
	active: boolean,
	closeFunc: (active: boolean) => void,
}

export const CompletedTestsModal = (props: SelectQuestionsModalProps) => {
	const {
		id,
		name,
		description,
		status,
		active,
		closeFunc,
	} = props;

	const [isTestResultModalOpen, setTestResultModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [testToDelete, setTestToDelete] = useState<number | null>(null);

	const { onDeleteTest } = useDeleteTest();

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

	const onResultClick = () => {
		setTestResultModalOpen(true);
	};

	const closeTestResultModal = () => {
		setTestResultModalOpen(false);
	};

	return (
		<>
			<Modal
				active={active}
				closeFunc={closeFunc}
				modalInModalActive={isTestResultModalOpen}
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
							text="Результаты"
							height={32}
							onClick={onResultClick}
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
			<ResultTestModal
				active={isTestResultModalOpen}
				closeFunc={closeTestResultModal}
			/>
		</>
	);
};
