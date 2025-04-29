import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import css from './passing-test-block.module.scss';
import { MainButton } from '../../../../shared/ui/main-button';
import { ConfirmationModal } from '../modal';
import { testAPI } from '../../../../entities/tests/api/api';

export const PassingTestBlock = () => {
	const { id } = useParams<{ id: string }>();

	const { data } = testAPI.useGetTestsByUserQuery();

	const navigate = useNavigate();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});

	const test = data?.find((test) => String(test.id) === id);

	if (!test || !test.questions || test.questions.length === 0) {
		return <div>Тест пустой или не найден</div>;
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { title, description, questions } = test;
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

	const handleConfirmFinish = () => {
		setIsModalOpen(false);
		navigate('/test-list');
		toast.success('Тест завершен успешно');
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
					<h1 className={css.title}>{title}</h1>
					<p className={css.description}>{description}</p>
				</div>
				<div className={css.question_count_block}>
					<div className={css.question_count}>
						Вопрос
						{' '}
						{currentQuestionIndex + 1}
						/
						{questions.length}
					</div>
				</div>
			</div>
			<div className={css.questions_wrapper}>
				<div className={css.questions}>
					<p className={css.question_text}>{currentQuestion.text}</p>
					<ul className={css.questions_list}>
						{currentQuestion.answers.map((answer: any) => (
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
		</div>
	);
};
