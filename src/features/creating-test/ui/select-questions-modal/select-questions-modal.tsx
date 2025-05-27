import React, { useState } from 'react';
import css from './select-questions-modal.module.scss';
import { Modal } from '../../../../shared/ui/modal';
import { questionAPI } from '../../../../entities/questions/api/api';
import { IQuestion } from '../../../../entities/questions/api/types';
import { QuestionList } from '../../../question-constructor-form/ui/question-list';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { testActions } from '../../../../entities/tests/model/slices/testSlice';
import { SearchBar } from '../search';
import { useFilteredQuestions } from '../../hooks/useFilteredQuestions';

interface SelectQuestionsModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
	testId: number;
}

export const SelectQuestionsModal = ({ active, closeFunc, testId }: SelectQuestionsModalProps) => {
	const dispatch = useAppDispatch();

	const { data } = questionAPI.useGetAllQuery({
		limit: 127,
		page: 1,
		search: '',
	});

	const [bind] = questionAPI.useBindMutation();
	const [unbind] = questionAPI.useUnbindMutation();

	const [selectedIds, setSelectedIds] = useState<number[]>([]);
	const [search, setSearch] = useState('');

	const filteredData = useFilteredQuestions(data, search);

	const toggleSelect = async (id: number) => {
		const isSelected = selectedIds.includes(id);

		try {
			if (isSelected) {
				await unbind({ questionId: id, testId }).unwrap();
				setSelectedIds(prev => prev.filter(qId => qId !== id));
			} else {
				await bind({ questionId: id, testId }).unwrap();
				setSelectedIds(prev => [...prev, id]);
			}

			dispatch(questionAPI.util.invalidateTags(['questionAPI']));

			if (data) {
				const updated = isSelected
					? selectedIds.filter(qId => qId !== id)
					: [...selectedIds, id];

				const selectedQuestions = data.filter(q => updated.includes(q.id));
				dispatch(testActions.setQuestions(selectedQuestions));
			}
		} catch (e) {
			console.error(isSelected ? 'Ошибка при анбинде' : 'Ошибка при бинде', e);
		}
	};

	return (
		<Modal active={active} closeFunc={closeFunc}>
			<div className={css.header}>
				<p className={css.title}>Список всех вопросов</p>
				<p className={css.selected_questions}>
					Выбрано вопросов
					{' '}
					{selectedIds.length}
					{' '}
					из
					{' '}
					{data?.length || 0}
				</p>
			</div>

			<SearchBar tagName={search} onTagNameChange={e => setSearch(e.target.value)} />

			<div className={css.questions}>
				{filteredData.length > 0 ? (
					filteredData.map((question: IQuestion) => (
						<QuestionList
							key={question.id}
							question={question}
							selectMode
							selected={selectedIds.includes(question.id)}
							onSelect={toggleSelect}
						/>
					))
				) : (
					<div className={css.no_questions}>Нет доступных вопросов</div>
				)}
			</div>
		</Modal>
	);
};
