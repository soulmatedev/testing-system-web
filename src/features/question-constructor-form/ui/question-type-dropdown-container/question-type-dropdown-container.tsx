import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { getCurrentQuestion, questionsActions } from '../../../../entities/questions/model/slice';
import { QuestionTypeDropdown } from '../../../../shared/ui/question-type-dropdown';
import css from './question-type-dropdown-container.module.scss';
import { useCreateQuestion } from '../../hooks';
import { useDeleteQuestion } from '../../hooks/useDeleteQuestion';
import { singleChooseActions, singleChooseSelectors } from '../../../../entities/question-types/single/model/slice';

export const QuestionTypeDropdownContainer = () => {
	const dispatch = useAppDispatch();
	const { id, type } = useSelector(getCurrentQuestion);
	const { createOrUpdateQuestion } = useCreateQuestion();
	const { onDeleteQuestion } = useDeleteQuestion();
	const questionCreated = useSelector(singleChooseSelectors.getQuestionCreated);
	const addedOption = useSelector(singleChooseSelectors.getAddedOption);

	const handleTypeChange = async (value: string) => {
		dispatch(questionsActions.setCurrentQuestionType(value));
		await createOrUpdateQuestion(value);
		dispatch(singleChooseActions.setQuestionCreated(true));
	};

	// useEffect(() => {
	// 	if (id && addedOption) {
	// 		const deleteQuestionOnUnmount = async () => {
	// 			await onDeleteQuestion(id);
	// 		};
	// 		deleteQuestionOnUnmount();
	// 	}
	// }, [id, addedOption]);

	return (
		<div className={css.dropdown}>
			<QuestionTypeDropdown value={type} onChange={handleTypeChange} />
		</div>
	);
};
