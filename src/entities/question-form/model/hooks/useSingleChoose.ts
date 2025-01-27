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

	const updateResponseAnswer = (id: number, text: string, weight: number) => {
		dispatch(singleChooseActions.updateResponseText({ id, text, weight }));
	};

	const clearResponses = () => {
		dispatch(singleChooseActions.clearResponses());
	};

	const getResponses = () => responses;

	return {
		responses,
		addResponse,
		removeResponse,
		updateResponseAnswer,
		getResponses,
		clearResponses,
	};
};
