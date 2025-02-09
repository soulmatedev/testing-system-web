import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../../../../../shared/libs/utils/redux';
import { competenciesAPI } from '../../../../../../../entities/competencies/api/api';

export const useDeleteCompetency = () => {
	const dispatch = useAppDispatch();

	const [deleteCompetency] = competenciesAPI.useDeleteMutation();

	const onDeleteCompetency = async (competencyId: number) => {
		try {
			await deleteCompetency({ id: competencyId })
				.unwrap();
			dispatch(competenciesAPI.util?.invalidateTags(['competencies']));
			toast.success('Компетенция удалена успешно');
		} catch (error) {
			toast.error('Возникла ошибка при удалении компетенции');
		}
	};

	return {
		onDeleteCompetency,
	};
};
