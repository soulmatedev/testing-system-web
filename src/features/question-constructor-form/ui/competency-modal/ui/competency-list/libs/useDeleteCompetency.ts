import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../../../../../shared/libs/utils/redux';
import { competencyAPI } from '../../../../../../../entities/competencies/api/api';

export const useDeleteCompetency = () => {
	const dispatch = useAppDispatch();

	const [deleteCompetency] = competencyAPI.useDeleteMutation();

	const onDeleteCompetency = async (competencyId: number) => {
		try {
			await deleteCompetency({ id: competencyId })
				.unwrap();
			dispatch(competencyAPI.util?.invalidateTags(['competency']));
			toast.success('Компетенция удалена успешно');
		} catch (error) {
			toast.error('Возникла ошибка при удалении компетенции');
		}
	};

	return {
		onDeleteCompetency,
	};
};
