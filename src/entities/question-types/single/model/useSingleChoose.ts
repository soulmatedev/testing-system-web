import { useDispatch, useSelector } from 'react-redux';
import { singleChooseActions, singleChooseSlice } from './singleChooseSlice';
import { IAnswer } from '../../../questions/api/types';

export const useSingleChoose = () => {
	const dispatch = useDispatch();
	const responses = useSelector(singleChooseSlice.selectors.getResponses);

	const addResponse = () => {
		dispatch(singleChooseActions.addResponse());
	};

	const removeResponse = (id: number) => {
		dispatch(singleChooseActions.removeResponse(id));
	};

	const updateResponseAnswer = (answer: IAnswer) => {
		dispatch(singleChooseActions.updateResponseText(answer));
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
