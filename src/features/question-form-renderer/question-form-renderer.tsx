import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SingleChooseForm } from '../../entities/question-types/single';
import { MultipleChooseForm } from '../../entities/question-types/multiple';
import { RelationForm } from '../../entities/question-types/relation';
import { questionsSelectors } from '../../entities/questions/model/slice';

export const QuestionFormRenderer = () => {
	const [activeQuestionId, _] = useState<number | null>(null);
	const { type } = useSelector(questionsSelectors.getCurrentQuestion);

	if (type === 'chooseType') {
		return null;
	}

	switch (type) {
	case 'single':
		return <SingleChooseForm questionId={activeQuestionId} />;
	case 'multiple':
		return <MultipleChooseForm questionId={activeQuestionId} />;
	case 'matching':
		return <RelationForm questionId={activeQuestionId} />;
	default:
		return null;
	}
};
