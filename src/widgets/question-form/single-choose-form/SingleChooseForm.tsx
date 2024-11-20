import React from 'react';
import { useDispatch } from 'react-redux';
import css from './SingleChooseForm.module.scss';
import { SingleChoiceInputResponse } from './input-response/SingleChoiceInputResponse';
import { useSingleChoose } from '../../../entities/single-choose/hooks/useSingleChoose';
import { singleChooseActions } from '../../../entities/single-choose/slice/singleChooseSlice';

export const SingleChooseForm: React.FC = () => {
	const dispatch = useDispatch();
	const {
		responses, addResponse,
	} = useSingleChoose();

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

	return (
		<div className={css.wrapper}>
			{responses.map((response) => (
				<SingleChoiceInputResponse
					key={response.id}
					index={response.id}
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
