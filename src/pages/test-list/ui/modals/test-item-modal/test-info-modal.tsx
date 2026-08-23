import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './test-info-modal.module.scss';
import { Modal } from '../../../../../shared/ui/modal';
import { ConfirmationModal } from '../../../../passing-test/ui/modal';
import { useDeleteTest } from '../../../hooks/useDeleteTest';
import { IUserResponse } from '../../../../../entities/user/auth/api/types';
import { TestDetails } from '../test-details';

interface TestInfoModalProps {
	id: number | null,
	name: string,
	user: IUserResponse | null,
	description: string,
	status: string,
	questionsCount: number,
	updatedAt: string,
	active: boolean,
	closeFunc: (active: boolean) => void,
}

export const TestInfoModal = (props: TestInfoModalProps) => {
	const {
		id,
		name,
		user,
		description,
		status,
		questionsCount,
		updatedAt,
		active,
		closeFunc,
	} = props;

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const { onDeleteTest } = useDeleteTest();

	const navigate = useNavigate();

	const confirmDelete = async () => {
		if (id !== null) {
			await onDeleteTest(id);
		}
		setIsDeleteModalOpen(false);
		closeFunc(false);
	};

	const handleNavigateToTest = () => navigate(`/test/${id}`);

	return (
		<>
			<Modal
				active={active}
				closeFunc={closeFunc}
				styles={css.modal}
			>
				<TestDetails
					name={name}
					description={description}
					status={status}
					questionsCount={questionsCount}
					executorLogin={user?.login ?? null}
					updatedAt={updatedAt}
					primaryLabel="Перейти к тесту"
					onPrimaryClick={handleNavigateToTest}
					onDelete={() => setIsDeleteModalOpen(true)}
				/>
			</Modal>
			<ConfirmationModal
				isOpen={isDeleteModalOpen}
				onConfirm={confirmDelete}
				onCancel={() => setIsDeleteModalOpen(false)}
				message="Вы уверены, что хотите удалить этот тест?"
			/>
		</>
	);
};
