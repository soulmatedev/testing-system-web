import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { questionsAPI } from '../../../entities/questions/api/api';
import { useSingleChoose } from '../../../entities/question-types/single';
import { questionsSelectors } from '../../../entities/questions/model/slice';

export const useCreateQuestion = () => {
	const [create] = questionsAPI.useCreateQuestionMutation();
	const { answers, clearAnswers } = useSingleChoose();

	const { text, type } = useSelector(questionsSelectors.getCurrentQuestion);

	const createQuestion = async () => {
		if (!text || type === 'chooseType') {
			toast.error('Пожалуйста, укажите текст вопроса и выберите тип вопроса.');
			return;
		}
		try {
			const res = await create({
				text,
				type,
				competency: '',
				answers,
				pairs: [],
			}).unwrap();

			toast.success('Вопрос создан успешно');
			return res;
			clearAnswers();
		} catch (error) {
			toast.error('Ошибка при создании вопроса');
			throw error;
		}
	};

	return { createQuestion };
};
