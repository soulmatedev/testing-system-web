import { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './question-constructor.module.scss';
import { QuestionType } from '../hooks/useQuestionType';
import { CreateQuestionButton } from './create-question-button';
import { AddCompetenciesButton } from './add-competencies-button';
import { IQuestion } from '../../../entities/questions/api/types';
import { TextArea } from '../../../shared/ui/textarea';
import { QuestionTypeDropdown } from '../../question-type-dropdown';
import { QuestionFormRenderer } from '../../question-form-renderer';
import { questionsActions, questionsSelectors } from '../../../entities/questions/model/slice';
import { useAppDispatch } from '../../../shared/libs/utils/redux';

interface QuestionFormProps {
	onNewQuestionCreated: (newQuestion: IQuestion) => void;
}

export const QuestionConstructor = ({ onNewQuestionCreated } : QuestionFormProps) => {
	const dispatch = useAppDispatch();

	const QUESTION_TEXTAREA_HEIGHT = 160;
	const QUESTION_TEXTAREA_HEIGHT_WIDTH = 550;

	const [activeQuestionId, _] = useState<number | null>(null);

	const { text, type } = useSelector(questionsSelectors.getCurrentQuestion);

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(questionsActions.setCurrentQuestionText(e.target.value));
	};

	const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(questionsActions.setCurrentQuestionType(e.target.value));
	};

	return (
		<>
			<div className={css.wrapper}>
				<div className={css.block}>
					<div className={css.left_side}>
						<TextArea
							width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
							height={QUESTION_TEXTAREA_HEIGHT}
							onChange={handleTextChange}
							placeholder="Вопрос"
							value={text}
						/>
						<AddCompetenciesButton />
					</div>
					<div className={css.right_side}>
						<div className={css.dropdowns}>
							<QuestionTypeDropdown onChange={handleTypeChange} />
						</div>
						<CreateQuestionButton
							questionType={type as QuestionType}
							questionText={text}
							onNewQuestionCreated={onNewQuestionCreated}
						/>
					</div>
				</div>
			</div>

			{type !== 'chooseType' && (
				<QuestionFormRenderer questionType={type} questionId={activeQuestionId} />
			)}
		</>
	);
};
