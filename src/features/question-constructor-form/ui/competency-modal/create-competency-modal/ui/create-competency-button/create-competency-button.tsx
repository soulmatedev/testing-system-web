import { toast } from 'react-toastify';
import { MainButton } from '../../../../../../../shared/ui/main-button';
import { useCreateCompetency } from '../../libs/useCreateCompetency';

interface ICreateCompetencyButtonProps {
	name: string,
	description: string,
	onSuccess: () => void,
}

export const CreateCompetencyButton = (props: ICreateCompetencyButtonProps) => {
	const { name, description, onSuccess } = props;
	const { createCompetency } = useCreateCompetency();

	const onCreateCompetency = async () => {
		try {
			await createCompetency(name, description);
			onSuccess();
		} catch (e) {
			toast.error('Ошибка при создании компетенции');
			throw e;
		}
	};

	return (
		<MainButton
			text="Создать"
			onClick={onCreateCompetency}
			height={35}
			width={100}
		/>
	);
};
