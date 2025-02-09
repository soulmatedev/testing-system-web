import { Input } from '../../../../../../../shared/ui/input';
import { InputTypes } from '../../../../../../../shared/ui/input/InputTypes';

interface ICompetencyNameInputProps {
	value: string;
	onChange: (value: string) => void;
}

export const CompetencyNameInput = (props: ICompetencyNameInputProps) => {
	const { value, onChange } = props;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<Input
			value={value}
			onChange={handleChange}
			placeholder="Название"
			type={InputTypes.TEXT}
		/>
	);
};
