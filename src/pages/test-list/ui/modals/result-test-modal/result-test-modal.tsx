import React from 'react';
import css from './result-test-modal.module.scss';
import { Modal } from '../../../../../shared/ui/modal';

interface ResultTestModalProps {
	active: boolean,
	closeFunc: (active: boolean) => void,
}

export const ResultTestModal = (props: ResultTestModalProps) => {
	const {
		active,
		closeFunc,
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
					<p className={css.text}>0</p>
				</div>
				<div>
					<p className={css.title}>Правильных ответов</p>
					<p className={css.text}>0 / 0</p>
				</div>
				<div>
					<p className={css.title}>Выполнил</p>
					<p className={css.completed}>soulmate</p>
				</div>
				<div>
					<p className={css.title}>Дата и время завершения</p>
					<p className={css.text}>20-05-2025 12:04</p>
				</div>
			</div>
		</Modal>
	);
};
