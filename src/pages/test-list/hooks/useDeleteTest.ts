import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../shared/libs/utils/redux';
import { testAPI } from '../../../entities/tests/api/api';

export const useDeleteTest = () => {
	const dispatch = useAppDispatch();
	const [deleteTest] = testAPI.useDeleteMutation();

	const onDeleteTest = useCallback(async (testId: number) => {
		try {
			await deleteTest({ id: testId }).unwrap();
			dispatch(testAPI.util?.invalidateTags(['test']));
		} catch (error) {
			toast.error('Ошибка при удалении теста');
		}
	}, [deleteTest, dispatch]);

	return {
		onDeleteTest,
	};
};
