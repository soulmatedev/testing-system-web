import css from './question-type-dropdown.module.scss';
import { questionTypes } from '../../../features/question-constructor-form/model/question-types';

interface QuestionTypeDropdownProps {
	value: string;
	onChange: (value: string) => void;
}

export const QuestionTypeDropdown = (props: QuestionTypeDropdownProps) => {
	const { value, onChange } = props;
	return (
		<select className={css.questionType} value={value} onChange={(e) => onChange(e.target.value)}>
			{questionTypes.map((type) => (
				<option key={type.value} value={type.value}>
					{type.label}
				</option>
			))}
		</select>
	);
};
