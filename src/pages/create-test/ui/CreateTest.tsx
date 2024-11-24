import css from './CreateTest.module.scss';
import { QuestionForm } from '../../../entities/question-form/ui/question-form';
import { QuestionFormPanel } from '../../../entities/question-form/ui/question-form-panel';
import { useTestDetails } from '../../../entities/question-form/model/hooks/useTestDetails';

export const CreateTest = () => {
	const { testDetails, updateTitle, updateDescription } = useTestDetails();
	return (
		<div className={css.wrapper}>
			<QuestionFormPanel
				title={testDetails.title}
				description={testDetails.description}
				onTitleChange={updateTitle}
				onDescriptionChange={updateDescription}
			/>
			<QuestionForm />
		</div>
	);
};
