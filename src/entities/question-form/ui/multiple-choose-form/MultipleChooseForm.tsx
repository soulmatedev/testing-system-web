import React from 'react';
import { useDispatch } from 'react-redux';
import css from './MultipleChooseForm.module.scss';
import { MultipleChoiceInputResponse } from './input-response/MultipleChoiceInputResponse';
import { useMultipleChoose } from '../../model/hooks/useMultipleChoose';
import { multipleChooseActions } from '../../model/slices/multipleChooseSlice';

export const MultipleChooseForm = () => {
	const dispatch = useDispatch();
	const {
		responses, addResponse,
	} = useMultipleChoose();

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			addResponse();
		}
	};

	const handleDeleteResponse = (id: number) => {
		dispatch(multipleChooseActions.removeResponse(id));
	};
	const handleTextChange = (id: number, text: string) => {
		dispatch(multipleChooseActions.updateResponseText({ id, text }));
	};

	return (
		<div className={css.wrapper}>
			{responses.map((response) => (
				<MultipleChoiceInputResponse
					key={response.id}
					response={response}
					onDelete={handleDeleteResponse}
					onTextChange={handleTextChange}
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
