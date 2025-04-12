import React from 'react';
import css from './question-form-panel.module.scss';

interface QuestionFormPanelProps {
	title: string;
	description: string;
	onTitleChange: (value: string) => void;
	onDescriptionChange: (value: string) => void;
}

export const QuestionFormPanel = ({
	title,
	description,
	onTitleChange,
	onDescriptionChange,
}: QuestionFormPanelProps) => (
	<div className={css.wrapper}>
		<div className={css.wp}>
			<div className={css.block}>
				<input
					placeholder="Название"
					className={css.name_input}
					value={title}
					onChange={(e) => onTitleChange(e.target.value)}
				/>
				<input
					className={css.description_input}
					placeholder="Описание"
					value={description}
					onChange={(e) => onDescriptionChange(e.target.value)}
				/>
			</div>
		</div>
	</div>
);
