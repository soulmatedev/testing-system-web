import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import css from './library-questions-page.module.scss';
import { useTest } from '../../../entities/tests/model/hooks/useTest';
import {
	selectDescription,
	selectQuestions,
	selectTitle,
} from '../../../entities/tests/model/selectors/testSelectors';
import { testAPI } from '../../../entities/tests/api/api';
import { QuestionConstructor } from '../../../features/question-constructor-form';
import { QuestionList } from '../../../features/question-constructor-form/ui/question-list';

export const LibraryQuestionsPage = () => {
	const {
		updateTitle,
		updateDescription,
	} = useTest();

	const questions = useSelector(selectQuestions);
	const title = useSelector(selectTitle);
	const description = useSelector(selectDescription);

	const [createTest] = testAPI.useCreateTestMutation();

	const onCreateTest = async () => {
		if (!title.trim()) {
			toast.warn('Название теста не может быть пустым');
			return;
		}

		const newTest = {
			name: title,
			description,
			questions,
		};

		try {
			await createTest(newTest).unwrap();
			toast.success('Тест успешно создан');
		} catch (err) {
			console.error('Ошибка при создании теста:', err);
		}
		console.log(newTest);
	};

	const handleNewQuestionCreated = (newQuestion: any) => {
		console.log('Новый вопрос:', newQuestion);
	};

	return (
		<div className={css.wrapper}>
			<div className={css.block}>
				{/* <QuestionFormPanel */}
				{/*	title={title} */}
				{/*	description={description} */}
				{/*	onTitleChange={updateTitle} */}
				{/*	onDescriptionChange={updateDescription} */}
				{/*	onCreateTest={onCreateTest} */}
				{/* /> */}
				<p className={css.header}>Библиотека вопросов</p>
				<QuestionConstructor onNewQuestionCreated={handleNewQuestionCreated} />
				<div className={css.list}>
					{questions.map((question) => (
						<QuestionList key={question.id} question={question} />
					))}
				</div>
			</div>
		</div>
	);
};
