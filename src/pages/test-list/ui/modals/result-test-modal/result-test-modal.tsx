import React from 'react';
import css from './result-test-modal.module.scss';
import { Modal } from '../../../../../shared/ui/modal';
import { ITestResult } from '../../../../../entities/tests/api/types';
import { formatDate } from '../../../../../shared/libs/utils/formatDate';
import { useAppSelector } from '../../../../../shared/libs/utils/redux';
import { testSelectors } from '../../../../../entities/tests/model/slices/testSlice';
import { IUserResponse } from '../../../../../entities/user/auth/api/types';

interface ResultTestModalProps {
	result?: ITestResult,
	onClose: () => void,
	user?: IUserResponse | null,
}

export const ResultTestModal = (props: ResultTestModalProps) => {
	const {
		result,
		onClose,
		user,
	} = props;

	const isActive = useAppSelector(testSelectors.getIsTestResultModalActive);

	return (
		<Modal
			active={isActive}
			closeFunc={onClose}
		>
			<p className={css.header}>Результаты</p>
			<div className={css.wrapper}>
				<div>
					<p className={css.title}>Количество вопросов</p>
					<p className={css.text}>{result?.questionsTotal}</p>
				</div>
				<div>
					<p className={css.title}>Правильных ответов</p>
					<p className={css.text}>
						{result?.correctAnswers}
						/
						{result?.questionsTotal}
					</p>
				</div>
				<div>
					<p className={css.title}>Выполнил</p>
					<p className={css.completed}>{user?.login}</p>
				</div>
				<div>
					<p className={css.title}>Дата и время завершения</p>
					<p className={css.text}>{formatDate(result?.completedAt)}</p>
				</div>
			</div>
		</Modal>
	);
};
