import { toast } from 'react-toastify';
import { MainButton } from '../../../../../../../shared/ui/main-button';
import { useEditCompetency } from '../../libs/useEditCompetency';

interface ICreateCompetencyButtonProps {
	id: number,
	name: string,
	description: string,
	onSuccess: () => void,
}

export const EditCompetencyButton = (props: ICreateCompetencyButtonProps) => {
	const {
		id, name, description, onSuccess,
	} = props;
	const { onEditCompetency } = useEditCompetency();

	const editCompetency = async () => {
		try {
			await onEditCompetency({ id, name, description });
			onSuccess();
		} catch (e) {
			toast.error('Произошло что-то невероятное');
			throw e;
		}
	};

	return (
		<MainButton
			text="Изменить"
			onClick={editCompetency}
			height={35}
			width={100}
		/>
	);
};
