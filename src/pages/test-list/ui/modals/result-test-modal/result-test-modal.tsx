import React from 'react';
import css from './result-test-modal.module.scss';
import { Modal } from '../../../../../shared/ui/modal';
import { ITestResult } from '../../../../../entities/tests/api/types';
import { formatDate } from '../../../../../shared/libs/utils/formatDate';

interface ResultTestModalProps {
	active: boolean,
	closeFunc: (active: boolean) => void,
	result?: ITestResult,
}

export const ResultTestModal = (props: ResultTestModalProps) => {
	const {
		active,
		closeFunc,
		result,
	} = props;

	return (
		<Modal
			active={active}
			closeFunc={closeFunc}
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
					<p className={css.completed}>soulmate</p>
				</div>
				<div>
					<p className={css.title}>Дата и время завершения</p>
					<p className={css.text}>{formatDate(result?.completedAt)}</p>
				</div>
			</div>
		</Modal>
	);
};
