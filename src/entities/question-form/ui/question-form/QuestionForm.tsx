import { useState } from 'react';
import css from './QuestionForm.module.scss';
import { TextArea } from '../../../../shared/ui/textarea';
import { QuestionTypeDropdown } from '../../../question-type/ui/question-type-dropdown';
import { MainButton } from '../../../../shared/ui/button';
import { QuestionFormRenderer } from '../../../../features/question-form-renderer/QuestionFormRenderer';

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
				<div className={css.block}>
					<TextArea
						width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
						height={QUESTION_TEXTAREA_HEIGHT}
						placeholder="Вопрос"
					/>
					<div className={css.right_side}>
						<QuestionTypeDropdown onChange={handleQuestionTypeChange} />
						<MainButton text="Новый вопрос" disabled={questionType === 'chooseType'} />
					</div>
				</div>
			</div>

			<QuestionFormRenderer questionType={questionType} />
		</>
	);
};
