import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import css from './passing-test-block.module.scss';
import { MainButton } from '../../../../shared/ui/main-button';
import { ConfirmationModal } from '../modal';
import { testAPI } from '../../../../entities/tests/api/api';
import { IAnswer } from '../../../../entities/answers/api/types';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { testActions } from '../../../../entities/tests/model/slices/testSlice';
import { ResultTestModal } from '../../../test-list/ui/modals/result-test-modal';

export const PassingTestBlock = () => {
	const { id } = useParams<{ id: string }>();

	const dispatch = useAppDispatch();

	const userId = Number(localStorage.getItem('id'));

	const { data } = testAPI.useGetTestByUserQuery(Number(id));

	const [completeTest] = testAPI.useCompleteTestMutation();

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});

	const { data: testResult } = testAPI.useGetTestResultQuery({ testId: Number(id), userId });

	const navigate = useNavigate();

	const test = data;

	if (!test || !test.questions || test.questions.length === 0) {
		return <div>Тест пустой или не найден</div>;
	}

	const { name, questions } = test;
	const currentQuestion = questions[currentQuestionIndex];

	const handleNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
		}
	};

	const handlePrevQuestion = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
		}
	};

	const handleFinishTest = () => {
		setIsModalOpen(true);
	};

	const handleConfirmFinish = async () => {
		setIsModalOpen(false);

		let correctCount = 0;

		const totalQuestionsCount = test.questions.length;

		test.questions.forEach((question) => {
			const userAnswer = selectedAnswers[question.id];

			const correctAnswers = question.answers
				.filter((answer) => answer.isCorrect)
				.map((a) => a.id);

			if (correctAnswers.includes(userAnswer!)) {
				correctCount++;
			}
		});

		dispatch(testActions.setCorrectAnswersCount(correctCount));
		dispatch(testActions.setTotalQuestionsCount(totalQuestionsCount));

		try {
			await completeTest({
				testId: Number(id),
				userId: Number(userId),
				questionsTotal: totalQuestionsCount,
				correctAnswers: correctCount,
			});
			toast.success('Тест завершен успешно');

			dispatch(testActions.setIsTestResultModalActive(true));
		} catch (error) {
			toast.error('Ошибка при завершении теста');
			console.error(error);
		}
	};

	const onClose = () => {
		dispatch(testActions.setIsTestResultModalActive(false));
		navigate('/test-list');
	};

	const handleCancelFinish = () => {
		setIsModalOpen(false);
	};

	const handleAnswerSelect = (questionId: number, answerId: number) => {
		if (currentQuestion.type === 'single') {
			setSelectedAnswers((prev) => ({
				...prev,
				[questionId]: answerId,
			}));
		} else {
			setSelectedAnswers((prev) => ({
				...prev,
				[questionId]: answerId,
			}));
		}
	};

	const getCheckboxClassName = (type: string) => (
		type === 'multiple' ? css.multipleChooseCheckbox : css.singleChooseCheckbox);

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<div className={css.test}>
					<h1 className={css.title}>{name}</h1>
				</div>
				<div className={css.question_count_block}>
					<div className={css.question_count}>
						Вопрос
						{' '}
						{currentQuestionIndex + 1}
						{' '}
						/
						{' '}
						{questions.length}
					</div>
				</div>
			</div>
			<div className={css.questions_wrapper}>
				<div className={css.questions}>
					<p className={css.question_text}>{currentQuestion.text}</p>
					<ul className={css.questions_list}>
						{currentQuestion.answers.map((answer: IAnswer) => (
							<li key={answer.id} className={css.answer_item}>
								<div className={css.checkbox_label}>
									<input
										type={currentQuestion.type === 'singleChoise' ? 'radio' : 'checkbox'}
										name={`question_${currentQuestion.id}`}
										checked={selectedAnswers[currentQuestion.id] === answer.id}
										onChange={() => handleAnswerSelect(currentQuestion.id, answer.id)}
										className={`${css.checkbox} ${getCheckboxClassName(currentQuestion.type)}`}
									/>
									{answer.text}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={css.buttons_wrapper}>
				<div className={css.quit}>
					<MainButton onClick={handleFinishTest} text="Завершить тест" />
				</div>
				<div className={css.navigation}>
					<MainButton
						onClick={handlePrevQuestion}
						disabled={currentQuestionIndex === 0}
						text="Назад"
					/>
					<MainButton
						onClick={handleNextQuestion}
						disabled={currentQuestionIndex === questions.length - 1}
						text="Далее"
					/>
				</div>
			</div>
			<ConfirmationModal
				isOpen={isModalOpen}
				onConfirm={handleConfirmFinish}
				onCancel={handleCancelFinish}
				message="Вы уверены, что хотите завершить тест?"
			/>

			<ResultTestModal
				result={testResult}
				onClose={onClose}
			/>
		</div>
	);
};
