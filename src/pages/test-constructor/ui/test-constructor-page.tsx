import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import css from './test-constructor-page.module.scss';
import { useTest } from '../../../entities/tests/model/hooks/useTest';
import {
	selectDescription,
	selectQuestions,
	selectTitle,
} from '../../../entities/tests/model/selectors/testSelectors';
import { testAPI } from '../../../entities/tests/api/api';
import { QuestionFormPanel } from '../../../features/question-form-panel';

export const TestConstructorPage = () => {
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
				<p className={css.header}>Конструктор тестов</p>
				<QuestionFormPanel
					description={description}
					onCreateTest={onCreateTest}
					onDescriptionChange={updateDescription}
					onTitleChange={updateTitle}
					title={title}
				/>
			</div>
		</div>
	);
};
