import React from 'react';
import css from './question-form-panel.module.scss';

interface QuestionFormPanelProps {
	title: string;
	description: string;
	onTitleChange: (value: string) => void;
	onDescriptionChange: (value: string) => void;
}

/** Карточка с названием и описанием теста из макета конструктора. */
export const QuestionFormPanel = ({
	title,
	description,
	onTitleChange,
	onDescriptionChange,
}: QuestionFormPanelProps) => (
	<div className={css.card}>
		<div className={css.field}>
			<span className={css.label}>Название теста</span>
			<input
				aria-label="Название теста"
				placeholder="Например: Основы тестирования ПО"
				className={css.name_input}
				value={title}
				onChange={(e) => onTitleChange(e.target.value)}
			/>
		</div>

		<div className={css.field}>
			<span className={css.label}>Описание</span>
			<textarea
				aria-label="Описание теста"
				className={css.description_input}
				placeholder="Коротко о том, что проверяет тест"
				value={description}
				onChange={(e) => onDescriptionChange(e.target.value)}
			/>
		</div>
	</div>
);
