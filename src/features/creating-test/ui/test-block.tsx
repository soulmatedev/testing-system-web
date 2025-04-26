import React, { useEffect, useRef, useState } from 'react';
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
import { IQuestion } from '../../../entities/questions/api/types';
import { QuestionList } from '../../question-constructor-form/ui/question-list';

export const TestBlock = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [testId, setTestId] = useState<number | null>(null);
	const testCreated = useRef(false);

	const questions = useSelector(selectQuestions);
	const title = useSelector(selectTitle);
	const description = useSelector(selectDescription);

	const [createTest] = testAPI.useCreateTestMutation();
	const [update] = testAPI.useUpdateMutation();

	const {
		updateTitle,
		updateDescription,
		clearQuestions,
	} = useTest();

	useEffect(() => {
		if (testCreated.current || testId) return;

		testCreated.current = true;

		createTest({
			name: '',
			description: '',
			questions: [],
		})
			.unwrap()
			.then((res) => {
				setTestId(res.test.id);
			})
			.catch((error) => {
				console.error('Ошибка создания теста:', error);
				toast.error('Ошибка создания теста');
			});
	}, [testId]);

	const onCreateTest = async () => {
		if (!testId) return toast.error('Ошибка: тест не инициализирован');

		try {
			await update({
				id: testId,
				name: title,
				description,
				questions: questions.map(q => q.id),
			}).unwrap();
			toast.success('Тест сохранён');

			updateTitle('');
			updateDescription('');
			clearQuestions();
		} catch (error) {
			console.error('Ошибка при сохранении теста:', error);
			toast.error('Ошибка при сохранении теста');
		}
	};

	const openSelectQuestionsModal = () => setIsModalOpen(true);
	const closeSelectQuestionsModal = () => setIsModalOpen(false);

	return (
		<div className={css.wrapper_block}>
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
			{testId !== null && (
				<SelectQuestionsModal
					active={isModalOpen}
					closeFunc={closeSelectQuestionsModal}
					testId={testId}
				/>
			)}
			<div className={css.list}>
				{questions?.map((question: IQuestion) => (
					<QuestionList
						key={question.id}
						question={question}
						showDeleteIcon={false}
					/>
				))}
			</div>
		</div>
	);
};
