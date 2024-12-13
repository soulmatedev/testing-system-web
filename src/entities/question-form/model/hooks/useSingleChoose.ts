import { useDispatch, useSelector } from 'react-redux';
import { singleChooseActions, singleChooseSlice } from '../slices/singleChooseSlice';

export const useSingleChoose = () => {
	const dispatch = useDispatch();
	const responses = useSelector(singleChooseSlice.selectors.getResponses);

	const addResponse = () => {
		dispatch(singleChooseActions.addResponse());
	};

	const removeResponse = (id: number) => {
		dispatch(singleChooseActions.removeResponse(id));
	};

	const updateResponseText = (id: number, text: string) => {
		dispatch(singleChooseActions.updateResponseText({ id, text }));
	};

	const clearResponses = () => {
		dispatch(singleChooseActions.clearResponses());
	};

	const getResponses = () => responses;

	return {
		responses,
		addResponse,
		removeResponse,
		updateResponseText,
		getResponses,
		clearResponses,
	};
};
