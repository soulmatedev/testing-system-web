import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './QuestionForm.module.scss';
import { TextArea } from '../../../../shared/ui/textarea';
import { QuestionTypeDropdown } from '../../../question-type/ui/question-type-dropdown';
import { MainButton } from '../../../../shared/ui/button';
import { QuestionFormRenderer } from '../../../../features/question-form-renderer/QuestionFormRenderer';
import { questionsActions } from '../../model/slices/questionsSlice';
import { RootState } from '../../../../app/reducers';
import { IUseQuestionTypeProps, QuestionType, useQuestionType } from './hooks/useQuestionType';
import {
	CompetenciesTypeDropdown,
} from '../../../competencies-type/ui/question-type-dropdown';

interface QuestionFormProps {
	onNewQuestionCreated: (newQuestion: any) => void;
}

export const QuestionConstructor = ({ onNewQuestionCreated } : QuestionFormProps) => {
	const QUESTION_TEXTAREA_HEIGHT = 160;
	const QUESTION_TEXTAREA_HEIGHT_WIDTH = 600;

	const dispatch = useDispatch();
	const [questionText, setQuestionText] = useState<string>('');
	const [questionType, setQuestionType] = useState<QuestionType>('chooseType');
	const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
	const questions = useSelector((state: RootState) => state.questionsSlice.questions);

	const { getResponses, clearResponses } = useQuestionType({ questionType } as IUseQuestionTypeProps);

	const handleQuestionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setQuestionType(event.target.value as QuestionType);
	};

	const createNewQuestion = () => {
		if (questionText && questionType !== 'chooseType') {
			const responses = getResponses();
			const newQuestion = {
				id: Date.now(),
				text: questionText,
				type: questionType,
				answers: responses.map(response => response),
			};

			onNewQuestionCreated(newQuestion);

			dispatch(questionsActions.addQuestion(newQuestion));

			const newQuestionId = questions.length + 1;
			setActiveQuestionId(newQuestionId);

			clearResponses();
			setQuestionText('');
		}
	};

	return (
		<>
			<div className={css.wrapper}>
				<div className={css.block}>
					<TextArea
						width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
						height={QUESTION_TEXTAREA_HEIGHT}
						onChange={(e) => setQuestionText(e.target.value)}
						placeholder="Вопрос"
						value={questionText}
					/>
					<div className={css.right_side}>
						<div className={css.dropdowns}>
							<QuestionTypeDropdown onChange={handleQuestionTypeChange} />
							<CompetenciesTypeDropdown onChange={handleQuestionTypeChange} />
						</div>
						<MainButton
							text="Сохранить"
							disabled={questionType === 'chooseType'}
							onClick={createNewQuestion}
						/>
					</div>
				</div>
			</div>

			{questionType !== 'chooseType' && (
				<QuestionFormRenderer questionType={questionType} questionId={activeQuestionId} />
			)}
		</>
	);
};
