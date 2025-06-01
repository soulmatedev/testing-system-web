import React from 'react';
import css from './single-choose-form.module.scss';
import { SingleChoiceInput } from './input-response';
import { useSingleChoose } from '../model';
import { CreateAnswerButton } from './create-answer-button';

export const SingleChooseForm = () => {
	const {
		answers, addAnswer, removeAnswer, updateResponseAnswer,
	} = useSingleChoose();

	const handleSelectResponse = (id: number) => {
		answers.forEach((answer) => {
			const isSelected = answer.id === id;
			updateResponseAnswer({
				...answer,
				isCorrect: isSelected,
			});
		});
	};

	return (
		<div className={css.wrapper}>
			{answers.map((answer) => (
				<div className={css.item} key={answer.id}>
					<SingleChoiceInput
						answer={answer}
						onDelete={removeAnswer}
						onAnswerChange={updateResponseAnswer}
						onSelect={handleSelectResponse}
					/>
				</div>
			))}
			<CreateAnswerButton onCreateAnswer={addAnswer} />
		</div>
	);
};
