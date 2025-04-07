import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../shared/libs/utils/redux';
import { answerAPI } from '../../../../answers/api/api';
import { questionsSelectors } from '../../../../questions/model/slice';

export const useDeleteAnswer = () => {
	const dispatch = useAppDispatch();

	const questionId = useSelector(questionsSelectors.getCurrentQuestionId);

	const [deleteTag] = answerAPI.useDeleteMutation();
	const [unbind] = answerAPI.useUnbindMutation();

	const deleteAnswer = async (id: number) => {
		try {
			await unbind({ questionId, answerId: id }).unwrap();

			await deleteTag({ id }).unwrap();

			dispatch(answerAPI.util?.invalidateTags(['answer']));

			toast.success('Ответ удален успешно');
		} catch (e) {
			console.error('Ошибка удаления ответа', e);
			toast.error('Возникла ошибка при удалении ответа...');
		}
	};

	return {
		deleteAnswer,
	};
};
