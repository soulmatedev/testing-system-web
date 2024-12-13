import css from './QuestionList.module.scss';
import { IQuestion } from '../../../../model/slices/questionsSlice';

interface QuestionListProps {
	question: IQuestion;
}

export const QuestionList = ({ question }: QuestionListProps) => (
	<div className={css.wrapper}>
		<div className={css.questionBlock}>
			<p className={css.question_text}>{question.text}</p>
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
