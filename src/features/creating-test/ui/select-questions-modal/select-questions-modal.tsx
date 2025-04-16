import React, { useState } from 'react';
import css from './select-questions-modal.module.scss';
import { Modal } from '../../../../shared/ui/modal';
import { questionAPI } from '../../../../entities/questions/api/api';
import { IQuestion } from '../../../../entities/questions/api/types';
import { QuestionList } from '../../../question-constructor-form/ui/question-list';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';

interface SelectQuestionsModalProps {
	active: boolean,
	closeFunc: (active: boolean) => void,
	testId: number,
}

export const SelectQuestionsModal = (props: SelectQuestionsModalProps) => {
	const { active, closeFunc, testId } = props;

	const dispatch = useAppDispatch();

	const { data } = questionAPI.useGetAllQuery({
		limit: 127,
		page: 1,
		search: '',
	});

	const [bind] = questionAPI.useBindMutation();
	const [unbind] = questionAPI.useUnbindMutation();

	const [selectedIds, setSelectedIds] = useState<number[]>([]);

	const toggleSelect = async (id: number) => {
		if (selectedIds.includes(id)) {
			try {
				await unbind({ questionId: id, testId }).unwrap();
				dispatch(questionAPI.util?.invalidateTags(['questionAPI']));
				setSelectedIds((prev) => prev.filter((qId) => qId !== id));
			} catch (e) {
				console.error('Ошибка при анбинде', e);
			}
		} else {
			try {
				await bind({ questionId: id, testId }).unwrap();
				dispatch(questionAPI.util?.invalidateTags(['questionAPI']));
				setSelectedIds((prev) => [...prev, id]);
			} catch (e) {
				console.error('Ошибка при бинде', e);
			}
		}
	};

	return (
		<Modal
			active={active}
			closeFunc={closeFunc}
		>
			<div className={css.header}>
				<p className={css.title}>Список всех вопросов</p>
				<p className={css.selected_questions}>
					Выбрано вопросов
					{' '}
					{selectedIds.length}
					{' '}
					из
					{' '}
					{ data?.length || 0 }
				</p>
			</div>
			<div className={css.questions}>
				{data && data.length > 0 ? (
					data.map((question: IQuestion) => (
						<QuestionList
							key={question.id}
							question={question}
							selectMode
							selected={selectedIds.includes(question.id)}
							onSelect={toggleSelect}
						/>
					))
				) : (
					<div className={css.no_questions}>
						Нет доступных вопросов
					</div>
				)}
			</div>
		</Modal>
	);
};
