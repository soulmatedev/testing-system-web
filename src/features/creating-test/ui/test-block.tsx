import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { useDeleteTest } from '../../../pages/test-list/hooks/useDeleteTest';
import { ConfirmationModal } from '../../../pages/passing-test/ui/modal';
import { useBlockExitWithModal } from '../../../pages/test-list/hooks/useBlockExitWithModal';
import { authAPI } from '../../../entities/user/auth/api/api';
import { TestSettings } from './test-settings';
import { PlusIcon } from '../../../shared/ui/icons';
import { useAppDispatch, useAppSelector } from '../../../shared/libs/utils/redux';
import { testActions, testSelectors } from '../../../entities/tests/model/slices/testSlice';

export const TestBlock = () => {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const { data: executors } = authAPI.useGetAllUsersQuery();

	const userId = Number(localStorage.getItem('id'));

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [testId, setTestId] = useState<number | null>(null);
	const [testSaved, setTestSaved] = useState(false);
	const [isExitModalOpen, setIsExitModalOpen] = useState(false);
	const testCreated = useRef(false);
	const [selectedExecutor, setSelectedExecutor] = useState<string>('');

	const questions = useSelector(selectQuestions);
	const title = useSelector(selectTitle);
	const description = useSelector(selectDescription);

	const { onDeleteTest } = useDeleteTest();

	const openSelectQuestionsModal = () => setIsModalOpen(true);
	const closeSelectQuestionsModal = () => setIsModalOpen(false);

	const [createTest] = testAPI.useCreateTestMutation();
	const [update] = testAPI.useUpdateMutation();

	const selectedUserId = useAppSelector(testSelectors.getSelectedUserId);

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
			userId,
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

	useBlockExitWithModal({
		shouldBlock: !!testId && !testSaved,
		onTrigger: () => setIsExitModalOpen(true),
	});

	const confirmExit = async () => {
		if (testId) await onDeleteTest(testId);
		setIsExitModalOpen(false);
		navigate('/test-list');
	};

	const cancelExit = () => {
		setIsExitModalOpen(false);
	};

	const onCreateTest = async () => {
		if (!testId) return toast.error('Ошибка: тест не инициализирован');

		if (title === '') {
			toast.error('Введите название теста');
			return;
		}

		if (!questions || questions.length === 0) {
			toast.error('Выберите вопросы для теста');
			return;
		}

		if (selectedUserId === null) {
			toast.error('Выберите исполнителя');
			return;
		}

		const payload = {
			id: testId,
			name: title,
			description,
			questions: questions.map(q => q.id),
			userId: selectedUserId,
		};

		try {
			await update(payload).unwrap();

			toast.success('Тест сохранён');
			setTestSaved(true);
			navigate('/test-list');

			updateTitle('');
			updateDescription('');
			clearQuestions();
		} catch (error) {
			console.error('Ошибка при сохранении теста:', error);
			toast.error('Ошибка при сохранении теста');
		}
	};

	useEffect(() => {
		if (!selectedExecutor || !executors) return;

		const selectedUser = executors.find((user) => user.email === selectedExecutor);
		if (selectedUser) {
			dispatch(testActions.setSelectedUserId(selectedUser.id));
		}
	}, [selectedExecutor, executors, dispatch]);

	return (
		<>
			<div className={css.wrapper}>
				<div className={css.header}>
					<div>
						<h1 className={css.title}>Конструктор тестов</h1>
						<p className={css.subtitle}>Черновик</p>
					</div>
					<div className={css.options}>
						<SecondButton
							text="Добавить вопросы"
							onClick={openSelectQuestionsModal}
						/>
						<MainButton
							text="Сохранить"
							onClick={onCreateTest}
						/>
					</div>
				</div>

				<div className={css.content}>
					<div className={css.main}>
						<QuestionFormPanel
							description={description}
							onDescriptionChange={updateDescription}
							onTitleChange={updateTitle}
							title={title}
						/>

						<div className={css.questionsCard}>
							<div className={css.questionsHeader}>
								<div className={css.questionsTitle}>
									Вопросы теста
									<span className={css.questionsCount}>{questions?.length ?? 0}</span>
								</div>
								<button
									type="button"
									className={css.libraryLink}
									onClick={openSelectQuestionsModal}
								>
									Выбрать из библиотеки
								</button>
							</div>

							{questions?.length ? (
								<div className={css.list}>
									{questions.map((question: IQuestion) => (
										<QuestionList
											key={question.id}
											question={question}
											showDeleteIcon={false}
										/>
									))}
								</div>
							) : (
								<div className={css.empty}>
									<div className={css.emptyIcon}>
										<PlusIcon />
									</div>
									<div className={css.emptyTitle}>Пока ни одного вопроса</div>
									<div className={css.emptyText}>
										Добавьте вопросы из библиотеки или сгенерируйте с ИИ
									</div>
									<button
										type="button"
										className={css.emptyButton}
										onClick={openSelectQuestionsModal}
									>
										Добавить вопросы
									</button>
								</div>
							)}
						</div>
					</div>

					<TestSettings
						executor={selectedExecutor}
						onExecutorChange={setSelectedExecutor}
						executors={executors || []}
					/>
				</div>

				{testId !== null && (
					<SelectQuestionsModal
						active={isModalOpen}
						closeFunc={closeSelectQuestionsModal}
						testId={testId}
					/>
				)}
			</div>
			<ConfirmationModal
				isOpen={isExitModalOpen}
				onConfirm={confirmExit}
				onCancel={cancelExit}
				message="Вы уверены, что хотите выйти? Несохранённый тест будет удалён."
			/>
		</>
	);
};
