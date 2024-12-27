import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './QuestionFormPanel.module.scss';
import { MainButton } from '../../../../shared/ui/button';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as BackArrow } from '../../../../shared/assets/images/back-arrow.svg';

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

	const goBack = () => {
		navigate(-1);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			goBack();
		}
	};

	return (
		<div className={css.wrapper}>
			<div className={css.wp}>
				<div className={css.options}>
					<div
						role="button"
						className={css.go_back}
						onKeyDown={handleKeyDown}
						onClick={goBack}
						tabIndex={0}
					>
						<BackArrow className={css.back_arrow} />
						<p>Вернуться назад</p>
					</div>
					<MainButton text="Сохранить тест" onClick={onCreateTest} />
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
