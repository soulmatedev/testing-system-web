import React, { useState } from 'react';
import css from './SingleChooseForm.module.scss';
import { SingleChoiceInputResponse } from './input-response';
import { useSingleChoose } from '../../model/hooks/useSingleChoose';

interface SingleChooseFormProps {
	questionId: number | null;
}

export const SingleChooseForm = ({ questionId }: SingleChooseFormProps) => {
	const {
		responses, addResponse, removeResponse, updateResponseAnswer,
	} = useSingleChoose();

	const [selectedResponseId, setSelectedResponseId] = useState<number | null>(null);

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			addResponse();
		}
	};

	const handleSelectResponse = (id: number) => {
		setSelectedResponseId((prevSelectedId) => (prevSelectedId === id ? null : id));
	};

	return (
		<div className={css.wrapper}>
			{responses.map((response) => (
				<SingleChoiceInputResponse
					key={response.id}
					index={response.id}
					response={response}
					onDelete={removeResponse}
					onAnswerChange={updateResponseAnswer}
					onSelect={handleSelectResponse}
					selected={selectedResponseId === response.id}
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
