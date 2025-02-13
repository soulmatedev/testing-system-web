import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { competencyAPI } from '../../../../../../entities/competencies/api/api';
import { ICompetency } from '../../../../../../entities/competencies/api/types';

export const useEditCompetency = () => {
	const dispatch = useAppDispatch();

	const [edit] = competencyAPI.useUpdateMutation();

	const onEditCompetency = async (competency: ICompetency) => {
		try {
			const res = await edit(competency)
				.unwrap();

			dispatch(competencyAPI.util?.invalidateTags(['competency']));
			toast.success('Компетенция изменена успешно');

			return res.competency;
		} catch (e) {
			toast.error('Возникла ошибка при изменении компетенции...');
		}
	};

	return {
		onEditCompetency,
	};
};
