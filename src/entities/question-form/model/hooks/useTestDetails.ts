import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/reducers';
import { ITest, testDetailsActions, testDetailsSelectors } from '../slices/testDetailsSlice';
import { questionsActions } from '../slices/questionsSlice';

export const useTestDetails = () => {
	const dispatch = useDispatch();
	const testDetails = useSelector((state: RootState) => state.testDetails);
	const tests = useSelector(testDetailsSelectors.getTests);

	const updateTitle = (title: string) => {
		dispatch(testDetailsActions.setTitle(title));
	};

	const updateDescription = (description: string) => {
		dispatch(testDetailsActions.setDescription(description));
	};

	const addTest = (test: ITest) => {
		dispatch(testDetailsActions.addTest(test));
	};

	const resetTestDetails = () => {
		dispatch(testDetailsActions.resetTestDetails());
	};

	const resetQuestions = () => {
		dispatch(questionsActions.resetQuestions());
	};

	const clearTests = () => {
		dispatch(testDetailsActions.clearTests());
	};

	return {
		testDetails,
		updateTitle,
		updateDescription,
		addTest,
		tests,
		resetTestDetails,
		resetQuestions,
		clearTests,
	};
};
