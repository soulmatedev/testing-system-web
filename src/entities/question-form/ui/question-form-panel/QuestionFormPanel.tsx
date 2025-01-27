import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './QuestionFormPanel.module.scss';
import { MainButton } from '../../../../shared/ui/button';

interface QuestionFormPanelProps {
	title: string;
	description: string;
	onTitleChange: (value: string) => void;
	onDescriptionChange: (value: string) => void;
	onCreateTest: () => void;
}

export const QuestionFormPanel = ({
	title,
	description,
	onTitleChange,
	onDescriptionChange,
	onCreateTest,
}: QuestionFormPanelProps) => {
	const navigate = useNavigate();

	return (
		<div className={css.wrapper}>
			<div className={css.wp}>
				<div className={css.options}>
					<MainButton text="Сохранить тест" onClick={onCreateTest} />
					<MainButton text="Добавить вопрос" />
				</div>
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
};
