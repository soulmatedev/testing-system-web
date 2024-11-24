import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/reducers';
import { ITest, testDetailsActions } from '../slices/testDetailsSlice';

export const useTestDetails = () => {
	const dispatch = useDispatch();
	const testDetails = useSelector((state: RootState) => state.testDetails);

	const updateTitle = (title: string) => {
		dispatch(testDetailsActions.setTitle(title));
	};

	const updateDescription = (description: string) => {
		dispatch(testDetailsActions.setDescription(description));
	};

	const addTest = (test: ITest) => {
		dispatch(testDetailsActions.addTest(test));
	};

	return {
		testDetails,
		updateTitle,
		updateDescription,
		addTest,
	};
};
