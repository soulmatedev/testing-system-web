import { useDispatch, useSelector } from 'react-redux';
import css from './MultipleChooseForm.module.scss';
import { MultipleChoiceInputResponse } from './input-response/MultipleChoiceInputResponse';
import { responsesActions } from '../../../redux/slice/responsesSlice';

export const MultipleChooseForm = () => {
	const dispatch = useDispatch();
	const responses = useSelector((state: any) => state.responses.responses);

	const handleAddResponse = () => {
		dispatch(responsesActions.addResponse());
	};

	const handleDeleteResponse = (index: number) => {
		dispatch(responsesActions.removeResponse(index));
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			handleAddResponse();
		}
	};
	return (
		<div className={css.wrapper}>
			{responses.map((response: { id: any; }, index: number) => (
				<MultipleChoiceInputResponse
					key={response.id || index}
					index={index}
					onDelete={handleDeleteResponse}
				/>
			))}
			<div
				className={css.add_answer}
				onClick={handleAddResponse}
				onKeyDown={handleKeyDown}
				role="button"
				tabIndex={0}
			>
				Добавить вариант
			</div>
		</div>
	);
};
