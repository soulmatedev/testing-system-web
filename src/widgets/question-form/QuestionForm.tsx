import { useState } from 'react';
import css from './QuestionForm.module.scss';
import { TextArea } from '../textarea/textarea';
import { QuestionTypeDropdown } from '../question-type-dropdown/QuestionTypeDropdown';
import { MainButton } from '../button/button';
import { QuestionFormRenderer } from '../question-form-renderer/QuestionFormRenderer';

export const QuestionForm = () => {
	const QUESTION_TEXTAREA_HEIGHT = 200;
	const QUESTION_TEXTAREA_HEIGHT_WIDTH = 600;

	const [questionType, setQuestionType] = useState<string>('chooseType');

	const handleQuestionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setQuestionType(event.target.value);
	};

	return (
		<>
			<div className={css.wrapper}>
				<TextArea
					width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
					height={QUESTION_TEXTAREA_HEIGHT}
					placeholder="Вопрос"
				/>
				<div className={css.right_side}>
					<QuestionTypeDropdown onChange={handleQuestionTypeChange} />
					<MainButton text="+ Вопрос" />
				</div>
			</div>

			<QuestionFormRenderer questionType={questionType} />
		</>
	);
};
