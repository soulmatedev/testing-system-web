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
		} catch (error) {
			toast.error('Возникла ошибка при удалении вопроса');
		}
	};

	return {
		onDeleteQuestion,
	};
};
