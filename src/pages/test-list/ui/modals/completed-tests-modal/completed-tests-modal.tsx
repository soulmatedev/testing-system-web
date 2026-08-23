import React, { useState } from 'react';
import css from './completed-tests-modal.module.scss';
import { Modal } from '../../../../../shared/ui/modal';
import { ConfirmationModal } from '../../../../passing-test/ui/modal';
import { useDeleteTest } from '../../../hooks/useDeleteTest';
import { ResultTestModal } from '../result-test-modal';
import { testAPI } from '../../../../../entities/tests/api/api';
import { useAppDispatch, useAppSelector } from '../../../../../shared/libs/utils/redux';
import { testActions, testSelectors } from '../../../../../entities/tests/model/slices/testSlice';
import { IUserResponse } from '../../../../../entities/user/auth/api/types';
import { TestDetails } from '../test-details';

interface CompletedTestsModalProps {
	id: number | null,
	name: string,
	description: string,
	user: IUserResponse | null,
	status: string,
	questionsCount: number,
	updatedAt: string,
	active: boolean,
	closeFunc: (active: boolean) => void,
}

export const CompletedTestsModal = (props: CompletedTestsModalProps) => {
	const {
		id,
		name,
		description,
		user,
		status,
		questionsCount,
		updatedAt,
		active,
		closeFunc,
	} = props;

	const dispatch = useAppDispatch();

	const isTestResultModalOpen = useAppSelector(testSelectors.getIsTestResultModalActive);

	const userId = user?.id ?? 0;
	const { data: testResult } = testAPI.useGetTestResultQuery({ testId: id, userId });

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const { onDeleteTest } = useDeleteTest();

	const confirmDelete = async () => {
		if (id !== null) {
			await onDeleteTest(id);
		}
		setIsDeleteModalOpen(false);
		closeFunc(false);
	};

	const onResultClick = () => {
		dispatch(testActions.setIsTestResultModalActive(true));
	};

	const onResultClose = () => {
		dispatch(testActions.setIsTestResultModalActive(false));
	};

	return (
		<>
			<Modal
				active={active}
				closeFunc={closeFunc}
				modalInModalActive={isTestResultModalOpen}
				styles={css.modal}
			>
				<TestDetails
					name={name}
					description={description}
					status={status}
					questionsCount={questionsCount}
					executorLogin={user?.login ?? null}
					updatedAt={updatedAt}
					primaryLabel="Смотреть аналитику"
					onPrimaryClick={onResultClick}
					onDelete={() => setIsDeleteModalOpen(true)}
				/>
			</Modal>
			<ConfirmationModal
				isOpen={isDeleteModalOpen}
				onConfirm={confirmDelete}
				onCancel={() => setIsDeleteModalOpen(false)}
				message="Вы уверены, что хотите удалить этот тест?"
			/>
			<ResultTestModal
				user={user}
				result={testResult}
				onClose={onResultClose}
			/>
		</>
	);
};
