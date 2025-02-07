import { useDispatch } from 'react-redux';
import { questionsActions } from './slice';
import { AppDispatch } from '../../../app/store';
import { IQuestion } from '../api/types';

export const useQuestions = () => {
	const dispatch: AppDispatch = useDispatch();

	const setQuestions = (questions: IQuestion[]) => {
		dispatch(questionsActions.setQuestions(questions));
	};

	const addQuestion = (question: IQuestion) => {
		dispatch(questionsActions.addQuestion(question));
	};

	const updateQuestion = (question: IQuestion) => {
		dispatch(questionsActions.updateQuestion(question));
	};

	const deleteQuestion = (questionId: number) => {
		dispatch(questionsActions.removeQuestion(questionId));
	};

	const updateQuestionText = (questionId: number, text: string) => {
		dispatch(questionsActions.updateQuestion({
			answers: [],
			competencies: '',
			pairs: [],
			type: '',
			id: questionId,
			text,
		}));
	};

	return {
		setQuestions,
		addQuestion,
		updateQuestion,
		deleteQuestion,
		updateQuestionText,
	};
};
