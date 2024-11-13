import css from './CreateTest.module.scss';
import { QuestionForm } from '../../../widgets/question-form/QuestionForm';

export const CreateTest = () => {
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<QuestionForm />
		</div>
	);
};
