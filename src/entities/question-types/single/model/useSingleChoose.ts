import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { singleChooseActions, singleChooseSelectors } from './slice';
import { IAnswer } from '../../../answers/api/types';
import { useCreateAnswer } from '../ui/libs/useCreateAnswer';
import { useDeleteAnswer } from '../ui/libs/useDeleteAnswer';

export const useSingleChoose = () => {
	const dispatch = useDispatch();

	const answers = useSelector(singleChooseSelectors.getAnswers);

	const { createAnswer } = useCreateAnswer();
	const { deleteAnswer } = useDeleteAnswer();

	const addAnswer = async () => {
		try {
			await createAnswer('', false, 0);
		} catch {
			toast.error('Возникла ошибка при создании ответа...');
		}
	};

	const removeAnswer = (id: number) => {
		deleteAnswer(id);
		dispatch(singleChooseActions.removeAnswer(id));
	};

	const updateResponseAnswer = (answer: IAnswer) => {
		const updatedAnswer = { ...answer };
		dispatch(singleChooseActions.updateAnswer(updatedAnswer));
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
