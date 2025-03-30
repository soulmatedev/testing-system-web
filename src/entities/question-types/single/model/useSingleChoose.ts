import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { singleChooseActions, singleChooseSlice } from './slice';
import { IAnswer } from '../../../answers/api/types';
import { useCreateAnswer } from '../ui/libs/useCreateAnswer';

export const useSingleChoose = () => {
	const dispatch = useDispatch();
	const answers = useSelector(singleChooseSlice.selectors.getAnswers);
	const { createAnswer } = useCreateAnswer();

	const addAnswer = async () => {
		try {
			const newAnswer = await createAnswer('', false, 0);
			if (newAnswer) {
				dispatch(singleChooseActions.addAnswer(newAnswer));
			}
		} catch {
			toast.error('Возникла ошибка при создании ответа...');
		}
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
