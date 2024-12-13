import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import css from './CreateTest.module.scss';
import { QuestionFormPanel } from '../../../entities/question-form/ui/question-form-panel';
import { useTestDetails } from '../../../entities/question-form/model/hooks/useTestDetails';
import { QuestionForm } from '../../../entities/question-form/ui/question-form';
import { QuestionList } from '../../../entities/question-form/ui/question-form/ui/question-list';
import { RootState } from '../../../app/reducers';

export const CreateTest = () => {
	const {
		testDetails,
		updateTitle,
		updateDescription,
		addTest,
	} = useTestDetails();
	const questions = useSelector((state: RootState) => state.questionsSlice.questions);

	const createTest = () => {
		addTest({
			id: Date.now(),
			title: testDetails.title,
			description: testDetails.description,
			questions,
		});
	};

	const handleNewQuestionCreated = (newQuestion: any) => {
		console.log('Новый вопрос:', newQuestion);
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
			<QuestionForm onNewQuestionCreated={handleNewQuestionCreated} />
			<div className={css.list}>
				{questions.map((question) => (
					<QuestionList key={question.id} question={question} />
				))}
			</div>
		</div>
	);
};
