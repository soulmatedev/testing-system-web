import React from 'react';
import { useDispatch } from 'react-redux';
import css from './multiple-choose-form.module.scss';
import { MultipleChoiceInput } from './input-response';
import { useMultipleChoose } from '../model/useMultipleChoose';

interface MultipleChooseFormProps {
	questionId: number | null;
}

export const MultipleChooseForm = ({ questionId }: MultipleChooseFormProps) => {
	const dispatch = useDispatch();
	const {
		responses, addResponse, updateResponseText, removeResponse,
	} = useMultipleChoose();

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			addResponse();
		}
	};

	return (
		<div className={css.wrapper}>
			{responses.map((response) => (
				<MultipleChoiceInput
					key={response.id}
					response={response}
					onDelete={removeResponse}
					onAnswerChange={updateResponseText}
				/>
			))}
			<div
				className={css.add_answer}
				onClick={addResponse}
				onKeyDown={handleKeyDown}
				role="button"
				tabIndex={0}
			>
				Добавить вариант
			</div>
		</div>
	);
};
