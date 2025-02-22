import { CreateQuestionButton } from './create-question-button';
import { AddCompetenciesButton } from './add-competencies-button';
import { QuestionFormRenderer } from '../../question-form-renderer';
import { QuestionTextInput } from './question-text-input';
import { QuestionTypeDropdownContainer } from './question-type-dropdown-container';
import css from './question-constructor.module.scss';

export const QuestionConstructor = () => (
	<>
		<div className={css.wrapper}>
			<div className={css.block}>
				<div className={css.left_side}>
					<QuestionTextInput />
					<AddCompetenciesButton />
				</div>
				<div className={css.right_side}>
					<QuestionTypeDropdownContainer />
					<CreateQuestionButton />
				</div>
			</div>
		</div>
		<QuestionFormRenderer />
	</>
);
