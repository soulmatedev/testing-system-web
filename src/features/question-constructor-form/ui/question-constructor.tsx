import { CreateQuestionButton } from './create-question-button';
import { QuestionFormRenderer } from '../../question-form-renderer';
import { QuestionTextInput } from './question-text-input';
import { QuestionTypeDropdownContainer } from './question-type-dropdown-container';
import css from './question-constructor.module.scss';

export const QuestionConstructor = () => (
	<>
		<div className={css.wrapper}>
			<div className={css.block}>
				<QuestionTextInput />
				<div className={css.right_side}>
					<QuestionTypeDropdownContainer />
					<CreateQuestionButton />
				</div>
			</div>
		</div>
		<QuestionFormRenderer />
	</>
);
