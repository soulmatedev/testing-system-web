import React from 'react';
import { TextArea } from '../../../../../../../shared/ui/textarea';

interface ICompetencyDescriptionTextareaProps {
	value: string;
	onChange: (value: string) => void;
}

export const CompetencyDescriptionTextarea = (props: ICompetencyDescriptionTextareaProps) => {
	const { value, onChange } = props;

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(event.target.value);
	};

	return (
		<TextArea
			value={value}
			onChange={handleChange}
			placeholder="Название"
			height={260}
			width={400}
		/>
	);
};
