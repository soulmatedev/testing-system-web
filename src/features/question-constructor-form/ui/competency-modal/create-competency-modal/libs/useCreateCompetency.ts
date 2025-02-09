import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { competenciesAPI } from '../../../../../../entities/competencies/api/api';

export const useCreateCompetency = () => {
	const dispatch = useAppDispatch();

	const [create] = competenciesAPI.useCreateCompetencyMutation();

	const createCompetency = async (name: string, description: string) => {
		try {
			const res = await create({ name, description })
				.unwrap();

			dispatch(competenciesAPI.util?.invalidateTags(['competencies']));
			toast.success('Компетенция создана успешно');

			return res.competency;
		} catch (e) {
			toast.error('Возникла ошибка при создании компетенции...');
		}
	};

	return {
		createCompetency,
	};
};
