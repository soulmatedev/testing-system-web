import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { getCurrentQuestion, questionsActions } from '../../../../entities/questions/model/slice';
import { QuestionTypeDropdown } from '../../../../shared/ui/question-type-dropdown';
import css from './question-type-dropdown-container.module.scss';
import { useCreateQuestion } from '../../hooks';

export const QuestionTypeDropdownContainer = () => {
	const dispatch = useAppDispatch();
	const { type } = useSelector(getCurrentQuestion);
	const { createOrUpdateQuestion } = useCreateQuestion();

	const handleTypeChange = async (value: string) => {
		dispatch(questionsActions.setCurrentQuestionType(value));
		await createOrUpdateQuestion(value);
	};

	return (
		<div className={css.dropdown}>
			<QuestionTypeDropdown value={type} onChange={handleTypeChange} />
		</div>
	);
};
