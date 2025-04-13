import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import css from './test-block.module.scss';
import { SecondButton } from '../../../shared/ui/second-button';
import { MainButton } from '../../../shared/ui/main-button';
import { QuestionFormPanel } from '../../question-form-panel';
import { useTest } from '../../../entities/tests/model/hooks/useTest';
import { selectDescription, selectQuestions, selectTitle } from '../../../entities/tests/model/selectors/testSelectors';
import { testAPI } from '../../../entities/tests/api/api';
import { SelectQuestionsModal } from './select-questions-modal';

export const TestBlock = () => {
	const {
		updateTitle,
		updateDescription,
	} = useTest();

	const [isModalOpen, setIsModalOpen] = useState(false);

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

	const openSelectQuestionsModal = () => {
		setIsModalOpen(true);
	};

	const closeSelectQuestionsModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div className={css.block}>
				<div className={css.header}>
					<p className={css.title}>Конструктор тестов</p>
					<div className={css.options}>
						<SecondButton
							text="Добавить вопросы"
							height={32}
							onClick={openSelectQuestionsModal}
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
				<div className={css.selected_questions} />
			</div>
			<SelectQuestionsModal active={isModalOpen} closeFunc={closeSelectQuestionsModal} />
		</>
	);
};
