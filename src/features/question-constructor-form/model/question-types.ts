export interface IQuestionType {
	value: string;
	label: string;
}

export const questionTypes: IQuestionType[] = [
	{ value: 'chooseType', label: 'Тип вопроса' },
	{ value: 'single', label: 'Одиночный выбор' },
	// { value: 'multiple', label: 'Множественный выбор' },
	// { value: 'matching', label: 'Соотношение' },
	{ value: 'open', label: 'Свободный ответ' },
];
