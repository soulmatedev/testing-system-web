import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../../../shared/libs/utils/redux';
import { answerAPI } from '../../../../answers/api/api';

export const useCreateAnswer = () => {
	const dispatch = useAppDispatch();

	const [create] = answerAPI.useCreateAnswerMutation();

	const createAnswer = async (text: string, isCorrect: boolean, weight: number) => {
		try {
			const res = await create({ text, isCorrect, weight })
				.unwrap();

			dispatch(answerAPI.util?.invalidateTags(['answer']));

			return res.answer;
		} catch (e) {
			toast.error('Возникла ошибка при создании ответа...');
		}
	};

	return {
		createAnswer,
	};
};
