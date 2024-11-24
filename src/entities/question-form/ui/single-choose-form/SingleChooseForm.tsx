import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './SingleChooseForm.module.scss';
import { SingleChoiceInputResponse } from './input-response/SingleChoiceInputResponse';
import { useSingleChoose } from '../../model/hooks/useSingleChoose';
import { singleChooseActions } from '../../model/slices/singleChooseSlice';

export const SingleChooseForm: React.FC = () => {
	const dispatch = useDispatch();
	const {
		responses, addResponse,
	} = useSingleChoose();

	const [selectedResponseId, setSelectedResponseId] = useState<number | null>(null);

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			addResponse();
		}
	};

	const handleDeleteResponse = (id: number) => {
		dispatch(singleChooseActions.removeResponse(id));
	};

	const handleTextChange = (id: number, text: string) => {
		dispatch(singleChooseActions.updateResponseText({ id, text }));
	};

	const handleSelectResponse = (id: number) => {
		setSelectedResponseId(id);
	};

	return (
		<div className={css.wrapper}>
			{responses.map((response) => (
				<SingleChoiceInputResponse
					key={response.id}
					index={response.id}
					response={response}
					onDelete={handleDeleteResponse}
					onTextChange={handleTextChange}
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
