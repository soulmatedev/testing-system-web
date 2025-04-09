import { toast } from 'react-toastify';
import { answerAPI } from '../../../../answers/api/api';
import { IAnswer } from '../../../../answers/api/types';

export const useUpdateAnswer = () => {
	const [update] = answerAPI.useUpdateAnswerMutation();

	const updateAnswer = async (answer: IAnswer) => {
		try {
			await update(answer).unwrap();
		} catch (e) {
			console.error('Ошибка обновления ответа', e);
			toast.error('Ошибка при сохранении ответа');
		}
	};

	return { updateAnswer };
};
