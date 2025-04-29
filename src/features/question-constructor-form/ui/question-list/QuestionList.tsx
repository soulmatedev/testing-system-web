import React from 'react';
import cx from 'classnames';
import { toast } from 'react-toastify';
import css from './QuestionList.module.scss';
import { IQuestion } from '../../../../entities/questions/api/types';
import { ReactComponent as DeleteIcon } from '../../../../shared/assets/images/trash.svg';
import { useDeleteQuestion } from '../../hooks/useDeleteQuestion';
import { handleKeyDown } from '../../../../shared/libs/utils/handleKeyDown';

interface QuestionListProps {
	question: IQuestion,
	selectMode?: boolean,
	selected?: boolean,
	onSelect?: (id: number) => void,
	showDeleteIcon?: boolean,
}

export const QuestionList = ({
	question,
	selectMode = false,
	selected = false,
	onSelect,
	showDeleteIcon = true,
}: QuestionListProps) => {
	const { onDeleteQuestion } = useDeleteQuestion();

	const handleClick = () => {
		if (selectMode && onSelect) {
			onSelect(question.id);
		}
	};

	const handleButtonKeyDown = handleKeyDown({
		keyCode: 'Enter',
		isActive: true,
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		action: () => {},
	});

	return (
		<div
			className={cx(css.wrapper, {
				[css.selectMode]: selectMode,
				[css.selected]: selected,
			})}
			role="button"
			tabIndex={0}
			onKeyDown={handleButtonKeyDown}
			onClick={handleClick}
		>
			<div className={css.questionBlock}>
				<div className={css.header}>
					<div>
						<p className={css.title}>Название</p>
						<p className={css.question_text}>{question.text}</p>
					</div>
					{!selectMode && showDeleteIcon && (
						<DeleteIcon
							className={css.delete}
							onClick={() => {
								onDeleteQuestion(question.id);
								toast.success('Вопрос удален успешно');
							}}
						/>
					)}
				</div>
				<p className={css.options}>Варианты ответов</p>
				{question.answers?.length > 0 && (
					<ul className={css.answers_list}>
						{question.answers.map((answer) => (
							<li key={answer.id} className={css.answer_item}>
								{answer.text}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
