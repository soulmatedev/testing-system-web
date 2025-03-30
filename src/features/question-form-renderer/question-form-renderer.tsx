import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SingleChooseForm } from '../../entities/question-types/single';
import { MultipleChooseForm } from '../../entities/question-types/multiple';
import { RelationForm } from '../../entities/question-types/relation';
import { getCurrentQuestion } from '../../entities/questions/model/slice';

export const QuestionFormRenderer = () => {
	const [activeQuestionId, _] = useState<number | null>(null);
	const { type } = useSelector(getCurrentQuestion);

	if (type === '') {
		return null;
	}

	switch (type) {
	case 'single':
		return <SingleChooseForm />;
	case 'multiple':
		return <MultipleChooseForm questionId={activeQuestionId} />;
	case 'matching':
		return <RelationForm questionId={activeQuestionId} />;
	default:
		return null;
	}
};
