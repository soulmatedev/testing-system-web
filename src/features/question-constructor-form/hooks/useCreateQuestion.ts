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

	const { getAnswers } = useSingleChoose();
	const answers = getAnswers();

	const { id, text } = useSelector(getCurrentQuestion);

	const createOrUpdateQuestion = async (type: string): Promise<IQuestion | undefined> => {
		if (!type || type === 'chooseType') {
			return;
		}

		const questionData = {
			text,
			type,
			answers: answers.map((a) => ({
				...a,
				questionId: id,
			})),
			pairs: [],
		};

		try {
			if (id) {
				await update({ id, ...questionData }).unwrap();
				toast.success('Вопрос обновлен успешно');
				dispatch(questionsActions.clearCurrentQuestion());
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
