import { useState } from 'react';
import css from './question-constructor.module.scss';
import { QuestionType } from '../hooks/useQuestionType';
import { CreateQuestionButton } from './create-question-button';
import { AddCompetenciesButton } from './add-competencies-button';
import { IQuestion } from '../../../entities/questions/api/types';
import { TextArea } from '../../../shared/ui/textarea';
import { QuestionTypeDropdown } from '../../question-type-dropdown';
import { QuestionFormRenderer } from '../../question-form-renderer';

interface QuestionFormProps {
	onNewQuestionCreated: (newQuestion: IQuestion) => void;
}

export const QuestionConstructor = ({ onNewQuestionCreated } : QuestionFormProps) => {
	const QUESTION_TEXTAREA_HEIGHT = 160;
	const QUESTION_TEXTAREA_HEIGHT_WIDTH = 550;

	const [questionText, setQuestionText] = useState<string>('');
	const [questionType, setQuestionType] = useState<QuestionType>('chooseType');
	const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

	const handleQuestionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setQuestionType(event.target.value as QuestionType);
	};

	return (
		<>
			<div className={css.wrapper}>
				<div className={css.block}>
					<div className={css.left_side}>
						<TextArea
							width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
							height={QUESTION_TEXTAREA_HEIGHT}
							onChange={(e) => setQuestionText(e.target.value)}
							placeholder="Вопрос"
							value={questionText}
						/>
						<AddCompetenciesButton />
					</div>
					<div className={css.right_side}>
						<div className={css.dropdowns}>
							<QuestionTypeDropdown onChange={handleQuestionTypeChange} />
						</div>
						<CreateQuestionButton
							questionType={questionType}
							questionText={questionText}
							onNewQuestionCreated={onNewQuestionCreated}
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
