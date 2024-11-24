import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/reducers';
import { testDetailsActions } from '../slices/testDetailsSlice';

export const useTestDetails = () => {
	const dispatch = useDispatch();
	const testDetails = useSelector((state: RootState) => state.testDetails);

	const updateTitle = (title: string) => {
		dispatch(testDetailsActions.setTitle(title));
	};

	const updateDescription = (description: string) => {
		dispatch(testDetailsActions.setDescription(description));
	};

	return {
		testDetails,
		updateTitle,
		updateDescription,
	};
};
