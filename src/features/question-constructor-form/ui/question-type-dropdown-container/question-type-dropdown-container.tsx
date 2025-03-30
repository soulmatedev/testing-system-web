import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { getCurrentQuestion, questionsActions } from '../../../../entities/questions/model/slice';
import { QuestionTypeDropdown } from '../../../../shared/ui/question-type-dropdown';
import css from './question-type-dropdown-container.module.scss';

export const QuestionTypeDropdownContainer = () => {
	const dispatch = useAppDispatch();
	const { type } = useSelector(getCurrentQuestion);

	const handleTypeChange = (value: string) => {
		dispatch(questionsActions.setCurrentQuestionType(value));
	};

	return (
		<div className={css.dropdown}>
			<QuestionTypeDropdown value={type} onChange={handleTypeChange} />
		</div>
	);
};
