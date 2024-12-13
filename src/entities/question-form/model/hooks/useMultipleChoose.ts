import { useDispatch, useSelector } from 'react-redux';
import { multipleChooseActions, multipleChooseSlice } from '../slices/multipleChooseSlice';

export const useMultipleChoose = () => {
	const dispatch = useDispatch();
	const responses = useSelector(multipleChooseSlice.selectors.getResponses);

	const addResponse = () => {
		dispatch(multipleChooseActions.addResponse());
	};

	const removeResponse = (id: number) => {
		dispatch(multipleChooseActions.removeResponse(id));
	};

	const updateResponseText = (id: number, text: string) => {
		dispatch(multipleChooseActions.updateResponseText({ id, text }));
	};

	const clearResponses = () => {
		dispatch(multipleChooseActions.clearResponses());
	};

	const getResponses = () => responses;

	return {
		responses,
		addResponse,
		removeResponse,
		updateResponseText,
		clearResponses,
		getResponses,
	};
};
