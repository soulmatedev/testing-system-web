import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { competencyAPI } from '../../../../../../entities/competencies/api/api';

export const useCreateCompetency = () => {
	const dispatch = useAppDispatch();

	const [create] = competencyAPI.useCreateCompetencyMutation();

	const createCompetency = async (name: string, description: string) => {
		try {
			const res = await create({ name, description })
				.unwrap();

			dispatch(competencyAPI.util?.invalidateTags(['competency']));
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
