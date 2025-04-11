import React from 'react';
import css from './QuestionList.module.scss';
import { IQuestion } from '../../../../entities/questions/api/types';
import { ReactComponent as DeleteIcon } from '../../../../shared/assets/images/trash.svg';
import { useDeleteQuestion } from '../../hooks/useDeleteQuestion';

interface QuestionListProps {
	question: IQuestion;
}

export const QuestionList = ({ question }: QuestionListProps) => {
	const { onDeleteQuestion } = useDeleteQuestion();
	return (
		<div className={css.wrapper}>
			<div className={css.questionBlock}>
				<div className={css.header}>
					<div>
						<p className={css.title}>Название</p>
						<p className={css.question_text}>{question.text}</p>
					</div>
					<DeleteIcon className={css.delete} onClick={() => onDeleteQuestion(question.id)} />
				</div>
				<p className={css.options}>Варианты ответов</p>
				{question.answers && question.answers.length > 0 && (
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
