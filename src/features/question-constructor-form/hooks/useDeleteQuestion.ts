import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../shared/libs/utils/redux';
import { questionAPI } from '../../../entities/questions/api/api';

export const useDeleteQuestion = () => {
	const dispatch = useAppDispatch();

	const [deleteQuestion] = questionAPI.useDeleteMutation();

	const onDeleteQuestion = async (questionId: number) => {
		try {
			await deleteQuestion({ id: questionId })
				.unwrap();
			dispatch(questionAPI.util?.invalidateTags(['questionAPI']));
			toast.success('Вопрос удален успешно');
		} catch (error) {
			toast.error('Возникла ошибка при удалении компетенции');
		}
	};

	return {
		onDeleteQuestion,
	};
};
