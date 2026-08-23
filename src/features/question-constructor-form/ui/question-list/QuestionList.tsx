import React from 'react';
import cx from 'classnames';
import { toast } from 'react-toastify';
import css from './QuestionList.module.scss';
import { IQuestion } from '../../../../entities/questions/api/types';
import { useDeleteQuestion } from '../../hooks/useDeleteQuestion';
import { handleKeyDown } from '../../../../shared/libs/utils/handleKeyDown';
import { PencilIcon, TrashIcon } from '../../../../shared/ui/icons';
import { questionTypeLabel } from '../../model/question-types';

interface QuestionListProps {
	question: IQuestion,
	/** Порядковый номер в списке — в макете выводится как «#1». */
	number?: number,
	/** В скольких тестах используется вопрос. Не показываем, если не посчитано. */
	usageCount?: number,
	selectMode?: boolean,
	selected?: boolean,
	onSelect?: (id: number) => void,
	onEdit?: (question: IQuestion) => void,
	showDeleteIcon?: boolean,
}

const usageLabel = (count: number) => {
	if (count === 1) return 'в 1 тесте';
	return `в ${count} тестах`;
};

export const QuestionList = ({
	question,
	number,
	usageCount,
	selectMode = false,
	selected = false,
	onSelect,
	onEdit,
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

	const handleDelete = () => {
		onDeleteQuestion(question.id);
		toast.success('Вопрос удален успешно');
	};

	return (
		<div
			className={cx(css.card, {
				[css.selectMode]: selectMode,
				[css.selected]: selected,
			})}
			role="button"
			tabIndex={0}
			onKeyDown={handleButtonKeyDown}
			onClick={handleClick}
		>
			<div className={css.header}>
				<div className={css.headerMain}>
					<div className={css.chips}>
						{number !== undefined && <span className={css.number}>{`#${number}`}</span>}
						<span className={css.chip}>{questionTypeLabel(question.type)}</span>
						{usageCount !== undefined && (
							<span className={css.chip}>{usageLabel(usageCount)}</span>
						)}
					</div>
					<div className={css.question_text}>{question.text}</div>
				</div>

				{!selectMode && (
					<div className={css.actions}>
						{onEdit && (
							<button
								type="button"
								className={css.iconButton}
								aria-label="Редактировать вопрос"
								onClick={() => onEdit(question)}
							>
								<PencilIcon />
							</button>
						)}
						{showDeleteIcon && (
							<button
								type="button"
								className={cx(css.iconButton, css.deleteButton)}
								aria-label="Удалить вопрос"
								onClick={handleDelete}
							>
								<TrashIcon />
							</button>
						)}
					</div>
				)}
			</div>

			{question.answers?.length > 0 && (
				<ul className={css.answers_list}>
					{question.answers.map((answer) => (
						<li
							key={answer.id}
							className={cx(css.answer_item, answer.isCorrect && css.correct)}
						>
							<span className={css.marker} />
							<span>{answer.text}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
