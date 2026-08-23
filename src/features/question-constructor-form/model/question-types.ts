export interface IQuestionType {
	value: string;
	label: string;
}

export const questionTypes: IQuestionType[] = [
	{ value: 'chooseType', label: 'Тип вопроса' },
	{ value: 'single', label: 'Одиночный выбор' },
	// { value: 'multiple', label: 'Множественный выбор' },
	// { value: 'matching', label: 'Соотношение' },
	// { value: 'open', label: 'Свободный ответ' },
];

// Человекочитаемые названия всех типов, которые может вернуть бэкенд
// (включая ещё не подключённые к конструктору) — используются в карточках
// библиотеки и в фильтрах.
const TYPE_LABELS: Record<string, string> = {
	single: 'Одиночный выбор',
	multiple: 'Множественный выбор',
	matching: 'Соотношение',
	open: 'Свободный ответ',
};

export const questionTypeLabel = (type: string) => TYPE_LABELS[type] ?? type;
