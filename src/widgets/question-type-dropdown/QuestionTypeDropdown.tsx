import css from './QuestionTypeDropdown.module.scss';

interface QuestionType {
	value: string;
	label: string;
}

interface QuestionTypeDropdownProps {
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const questionTypes: QuestionType[] = [
	{ value: 'chooseType', label: 'Выбери тип вопроса' },
	{ value: 'singleChoice', label: 'Одиночный выбор' },
	{ value: 'multipleChoice', label: 'Множественный выбор' },
	{ value: 'relation', label: 'Соотношение' },
	{ value: 'freeQuestion', label: 'Свободный ответ' },
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
