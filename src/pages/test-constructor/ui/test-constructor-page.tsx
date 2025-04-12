import React from 'react';
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
import { MainButton } from '../../../shared/ui/main-button';
import { SecondButton } from '../../../shared/ui/second-button';

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
				<div className={css.header}>
					<p className={css.title}>Конструктор тестов</p>
					<div className={css.options}>
						<SecondButton
							text="Добавить вопросы"
							height={32}
						/>
						<MainButton
							text="Сохранить"
							onClick={onCreateTest}
							height={32}
						/>
					</div>
				</div>
				<QuestionFormPanel
					description={description}
					onDescriptionChange={updateDescription}
					onTitleChange={updateTitle}
					title={title}
				/>
				<p className={css.selected_questions}>Выбранных вопросов 12 из 23</p>
			</div>
		</div>
	);
};
