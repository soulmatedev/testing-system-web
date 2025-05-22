import React, { useState } from 'react';
import css from './single-choose-form.module.scss';
import { SingleChoiceInput } from './input-response';
import { useSingleChoose } from '../model';
import { CompetenciesList } from './competencies-list';
import { CreateAnswerButton } from './create-answer-button';

export const SingleChooseForm = () => {
	const {
		answers, addAnswer, removeAnswer, updateResponseAnswer, updateAnswerCorrectness,
	} = useSingleChoose();

	const [selectedResponseId, setSelectedResponseId] = useState<number | null>(null);

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
					<CompetenciesList answerId={answer.id} />
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
