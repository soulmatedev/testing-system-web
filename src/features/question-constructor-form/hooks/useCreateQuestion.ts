import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { questionAPI } from '../../../entities/questions/api/api';
import { useSingleChoose } from '../../../entities/question-types/single';
import { getCurrentQuestion, questionsActions } from '../../../entities/questions/model/slice';
import { IQuestion } from '../../../entities/questions/api/types';
import { useAppDispatch } from '../../../shared/libs/utils/redux';

export const useCreateQuestion = () => {
	const dispatch = useAppDispatch();

	const [create] = questionAPI.useCreateMutation();
	const [update] = questionAPI.useUpdateMutation();

	const { answers, clearAnswers } = useSingleChoose();
	const { id, type } = useSelector(getCurrentQuestion);

	const createOrUpdateQuestion = async (newText: string): Promise<IQuestion | undefined> => {
		if (!newText) {
			toast.error('Пожалуйста, укажите текст вопроса');
			return;
		}

		const questionData = {
			text: newText,
			type,
			answers,
			pairs: [],
		};

		try {
			if (id) {
				await update({ id, ...questionData }).unwrap();
				toast.success('Вопрос обновлен успешно');
				clearAnswers();
			} else {
				const res = await create(questionData).unwrap();
				dispatch(questionsActions.setCurrentQuestionId(res.id));
			}
		} catch (error) {
			toast.error('Ошибка при сохранении вопроса');
			console.error(error);
			throw error;
		}
	};

	return { createOrUpdateQuestion };
};
