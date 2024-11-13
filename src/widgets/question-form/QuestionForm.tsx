import css from './QuestionForm.module.scss';
import { TextArea } from '../textarea/textarea';
import { QuestionTypeDropdown } from '../question-type-dropdown/QuestionTypeDropdown';
import { MainButton } from '../button/button';
import { SingleChooseForm } from './single-choose-form/SingleChooseForm';

export const QuestionForm = () => {
	const QUESTION_TEXTAREA_HEIGHT = 200;
	const QUESTION_TEXTAREA_HEIGHT_WIDTH = 600;

	return (
		<>
			<div className={css.wrapper}>
				<TextArea
					width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
					height={QUESTION_TEXTAREA_HEIGHT}
					placeholder="Вопрос"
				/>
				<div className={css.right_side}>
					<QuestionTypeDropdown />
					<MainButton text="+ Вопрос" />
				</div>
			</div>
			<SingleChooseForm />
		</>
	);
};
