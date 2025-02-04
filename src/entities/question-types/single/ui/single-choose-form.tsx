import React, { useState } from 'react';
import css from './single-choose-form.module.scss';
import { SingleChoiceInput } from './input-response';
import { useSingleChoose } from '../model';

interface SingleChooseFormProps {
	questionId: number | null;
}

export const SingleChooseForm = ({ questionId }: SingleChooseFormProps) => {
	const {
		answers, addAnswer, removeAnswer, updateResponseAnswer, updateAnswerCorrectness,
	} = useSingleChoose();

	const [selectedResponseId, setSelectedResponseId] = useState<number | null>(null);

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			addAnswer();
		}
	};

	const handleSelectResponse = (id: number) => {
		if (selectedResponseId === id) {
			updateAnswerCorrectness(id, false);
			setSelectedResponseId(null);
		} else {
			setSelectedResponseId(id);
			answers.forEach((answer) => {
				if (answer.id === id) {
					updateAnswerCorrectness(id, true);
				} else {
					updateAnswerCorrectness(answer.id, false);
				}
			});
		}
	};

	return (
		<div className={css.wrapper}>
			{answers.map((answer) => (
				<SingleChoiceInput
					key={answer.id}
					index={answer.id}
					answer={answer}
					onDelete={removeAnswer}
					onAnswerChange={updateResponseAnswer}
					onSelect={handleSelectResponse}
					selected={selectedResponseId === answer.id}
				/>
			))}
			<div
				className={css.add_answer}
				onClick={addAnswer}
				onKeyDown={handleKeyDown}
				role="button"
				tabIndex={0}
			>
				Добавить вариант
			</div>
		</div>
	);
};
