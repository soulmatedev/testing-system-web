import { toast } from 'react-toastify';
import { questionsAPI } from '../../../entities/questions/api/api';
import { ICreateQuestionRequest } from '../../../entities/questions/api/types';

export const useCreateQuestion = () => {
	const [create] = questionsAPI.useCreateQuestionMutation();

	const createQuestion = async (question: ICreateQuestionRequest) => {
		try {
			const res = await create(question).unwrap();
			toast.success('Вопрос создан успешно');
			return res;
		} catch (error) {
			toast.error('Ошибка при создании вопроса');
			throw error;
		}
	};

	return { createQuestion };
};
