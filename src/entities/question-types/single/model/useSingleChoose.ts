import { useDispatch, useSelector } from 'react-redux';
import { singleChooseActions, singleChooseSlice } from './slice';
import { IAnswer, ICreateAnswer } from '../../../answers/api/types';

export const useSingleChoose = () => {
	const dispatch = useDispatch();
	const answers = useSelector(singleChooseSlice.selectors.getAnswers);

	const addAnswer = () => {
		const newAnswer: IAnswer = {
			id: Date.now(),
			text: '',
			isCorrect: false,
			weight: 0,
		};
		dispatch(singleChooseActions.addAnswer(newAnswer));
	};

	const removeAnswer = (id: number) => {
		dispatch(singleChooseActions.removeAnswer(id));
	};

	const updateResponseAnswer = (answer: IAnswer) => {
		dispatch(singleChooseActions.updateAnswer(answer));
	};

	const updateAnswerCorrectness = (id: number, isCorrect: boolean) => {
		dispatch(singleChooseActions.updateAnswerCorrectness({ id, isCorrect }));
	};

	const clearAnswers = () => {
		dispatch(singleChooseActions.clearAnswers());
	};

	const getAnswers = () => answers;

	return {
		answers,
		addAnswer,
		removeAnswer,
		updateResponseAnswer,
		updateAnswerCorrectness,
		getAnswers,
		clearAnswers,
	};
};
