import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../../app/reducers';
import { ITest, testDetailsActions, testDetailsSelectors } from '../slices/testDetailsSlice';
import { questionsActions } from '../slices/questionsSlice';

export const useTestDetails = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const testDetails = useSelector((state: RootState) => state.testDetails);
	const tests = useSelector(testDetailsSelectors.getTests);
	const questions = useSelector((state: RootState) => state.questionsSlice.questions);

	const updateTitle = (title: string) => {
		dispatch(testDetailsActions.setTitle(title));
	};

	const updateDescription = (description: string) => {
		dispatch(testDetailsActions.setDescription(description));
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

	const addTest = (test: ITest) => {
		if (questions.length === 0 || !test.title || !test.description) {
			if (questions.length === 0) {
				toast.error('Невозможно создать тест без вопросов!');
			}
			if (!test.title) {
				toast.error('Название теста обязательно!');
			}
			if (!test.description) {
				toast.error('Описание теста обязательно!');
			}
			return;
		}

		dispatch(testDetailsActions.addTest(test));
		toast.success('Тест успешно создан!');
		resetTestDetails();
		resetQuestions();
		navigate('/');
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
