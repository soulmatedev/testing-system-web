import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { singleChooseActions, singleChooseSelectors } from './slice';
import { IAnswer } from '../../../answers/api/types';
import { useCreateAnswer } from '../ui/libs/useCreateAnswer';
import { questionsSelectors } from '../../../questions/model/slice';
import { answerAPI } from '../../../answers/api/api';
import { useDeleteAnswer } from '../ui/libs/useDeleteAnswer';
import { useUpdateAnswer } from '../ui/libs/useUpdateAnswer';

export const useSingleChoose = () => {
	const dispatch = useDispatch();

	const storedAnswers = useSelector(singleChooseSelectors.getAnswers);

	const questionId = useSelector(questionsSelectors.getCurrentQuestionId);
	const { data: answers = [] } = answerAPI.useGetAnswersByQuestionIdQuery(questionId, {
		skip: questionId === 0 || storedAnswers.length === 0,
	});

	const { createAnswer } = useCreateAnswer();
	const { deleteAnswer } = useDeleteAnswer();
	const { updateAnswer: updateAnswerRequest } = useUpdateAnswer();

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
		dispatch(singleChooseActions.updateAnswer(answer));
		updateAnswerRequest(answer);
	};

	const updateAnswerCorrectness = (id: number, isCorrect: boolean) => {
		dispatch(singleChooseActions.updateAnswerCorrectness({ id, isCorrect }));
	};

	const clearAnswers = () => {
		dispatch(singleChooseActions.clearAnswers());
	};

	const getAnswers = () => answers;

	return {
		addAnswer,
		removeAnswer,
		updateResponseAnswer,
		updateAnswerCorrectness,
		getAnswers,
		clearAnswers,
	};
};
