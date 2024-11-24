import { useNavigate } from 'react-router-dom';
import css from './CreateTest.module.scss';
import { QuestionFormPanel } from '../../../entities/question-form/ui/question-form-panel';
import { useTestDetails } from '../../../entities/question-form/model/hooks/useTestDetails';
import { QuestionForm } from '../../../entities/question-form/ui/question-form';

export const CreateTest = () => {
	const {
		testDetails,
		updateTitle,
		updateDescription,
		addTest,
	} = useTestDetails();
	const navigate = useNavigate();

	const createTest = () => {
		addTest({
			id: Date.now(),
			title: testDetails.title,
			description: testDetails.description,
		});
		navigate('/');
	};

	return (
		<div className={css.wrapper}>
			<QuestionFormPanel
				title={testDetails.title}
				description={testDetails.description}
				onTitleChange={updateTitle}
				onDescriptionChange={updateDescription}
				onCreateTest={createTest}
			/>
			<QuestionForm />
		</div>
	);
};
