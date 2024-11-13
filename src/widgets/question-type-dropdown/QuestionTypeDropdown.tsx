import css from './QuestionTypeDropdown.module.scss';

interface QuestionType {
	value: string;
	label: string;
}

const questionTypes: QuestionType[] = [
	{ value: 'chooseType', label: 'Выбери тип вопроса' },
	{ value: 'singleChoice', label: 'Одиночный выбор' },
	{ value: 'multipleChoice', label: 'Множественный выбор' },
	{ value: 'relation', label: 'Соотношение' },
	{ value: 'openQuestion', label: 'Открытый вопрос' },
];

export const QuestionTypeDropdown = () => {
	const a = '';
	return (
		<select className={css.questionType}>
			{questionTypes.map((type) => (
				<option key={type.value} value={type.value}>
					{type.label}
				</option>
			))}
		</select>
	);
};
