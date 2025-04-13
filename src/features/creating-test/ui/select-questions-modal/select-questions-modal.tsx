import React, { useState } from 'react';
import css from './select-questions-modal.module.scss';
import { Modal } from '../../../../shared/ui/modal';
import { questionAPI } from '../../../../entities/questions/api/api';
import { IQuestion } from '../../../../entities/questions/api/types';
import { QuestionList } from '../../../question-constructor-form/ui/question-list';

interface SelectQuestionsModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
}

export const SelectQuestionsModal = (props: SelectQuestionsModalProps) => {
	const { active, closeFunc } = props;

	const { data } = questionAPI.useGetAllQuery({
		limit: 127,
		page: 1,
		search: '',
	});

	const [selectedIds, setSelectedIds] = useState<number[]>([]);

	const toggleSelect = (id: number) => {
		setSelectedIds((prev) => {
			if (prev.includes(id)) {
				return prev.filter((qId) => qId !== id);
			}
			return [...prev, id];
		});
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
				{data?.map((question: IQuestion) => (
					<QuestionList
						key={question.id}
						question={question}
						selectMode
						selected={selectedIds.includes(question.id)}
						onSelect={toggleSelect}
					/>
				))}
			</div>
		</Modal>
	);
};
