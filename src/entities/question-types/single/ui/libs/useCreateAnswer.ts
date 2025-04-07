import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../shared/libs/utils/redux';
import { answerAPI } from '../../../../answers/api/api';
import { questionsSelectors } from '../../../../questions/model/slice';

export const useCreateAnswer = () => {
	const dispatch = useAppDispatch();

	const questionId = useSelector(questionsSelectors.getCurrentQuestionId);

	const [create] = answerAPI.useCreateAnswerMutation();
	const [bind] = answerAPI.useBindMutation();

	const createAnswer = async (
		text: string,
		isCorrect: boolean,
		weight: number,
	) => {
		try {
			const res = await create({
				text,
				isCorrect,
				weight,
				questionId,
			}).unwrap();

			const answerId = res.answer.id;

			await bind({
				questionId,
				answerId,
			});

			dispatch(answerAPI.util?.invalidateTags(['answer']));

			return res;
		} catch (e) {
			console.error('Ошибка', e);
			toast.error('Возникла ошибка при создании ответа...');
		}
	};

	return {
		createAnswer,
	};
};
