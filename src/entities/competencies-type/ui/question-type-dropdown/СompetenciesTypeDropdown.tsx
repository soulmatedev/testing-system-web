import css from './СompetenciesTypeDropdown.module.scss';

interface QuestionType {
	value: string;
	label: string;
}

interface QuestionTypeDropdownProps {
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const questionTypes: QuestionType[] = [
	{ value: 'competency', label: 'Компетенция' },
	{ value: 'leadership', label: 'Лидерство' },
	{ value: 'strategicThinking', label: 'Стратегическое мышление' },
	{ value: 'conflictResolution', label: 'Разрешение конфликтов' },
	{ value: 'decisionMaking', label: 'Принятие решений' },
];

export const CompetenciesTypeDropdown = ({ onChange }: QuestionTypeDropdownProps) => (
	<select className={css.questionType} onChange={onChange}>
		{questionTypes.map((type) => (
			<option key={type.value} value={type.value}>
				{type.label}
			</option>
		))}
	</select>
);
