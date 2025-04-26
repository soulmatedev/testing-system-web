import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../app/store';
import { testActions } from '../slices/testSlice';
import { ICreateTestRequest } from '../../api/types';

export const useTest = () => {
	const dispatch: AppDispatch = useDispatch();

	const setTests = (tests: ICreateTestRequest[]) => {
		dispatch(testActions.setTests(tests));
	};

	const addTest = (test: ICreateTestRequest) => {
		dispatch(testActions.addTest(test));
	};

	const updateTest = (test: ICreateTestRequest) => {
		dispatch(testActions.updateTest(test));
	};

	const deleteTest = (testName: string) => {
		dispatch(testActions.deleteTest(testName));
	};

	const updateTitle = (title: string) => {
		dispatch(testActions.setTitle(title));
	};

	const updateDescription = (description: string) => {
		dispatch(testActions.setDescription(description));
	};

	const clearQuestions = () => {
		dispatch(testActions.setQuestions([]));
	};

	return {
		setTests,
		addTest,
		updateTest,
		deleteTest,
		updateTitle,
		updateDescription,
		clearQuestions,
	};
};
