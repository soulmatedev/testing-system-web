import css from './question-type-dropdown.module.scss';

interface QuestionType {
	value: string;
	label: string;
}

interface QuestionTypeDropdownProps {
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const questionTypes: QuestionType[] = [
	{ value: 'chooseType', label: 'Тип вопроса' },
	{ value: 'single', label: 'Одиночный выбор' },
	{ value: 'multiple', label: 'Множественный выбор' },
	{ value: 'matching', label: 'Соотношение' },
	{ value: 'open', label: 'Свободный ответ' },
];

export const QuestionTypeDropdown = ({ onChange }: QuestionTypeDropdownProps) => (
	<select className={css.questionType} onChange={onChange}>
		{questionTypes.map((type) => (
			<option key={type.value} value={type.value}>
				{type.label}
			</option>
		))}
	</select>
);
