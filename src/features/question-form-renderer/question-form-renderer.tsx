import { SingleChooseForm } from '../../entities/question-types/single';
import { MultipleChooseForm } from '../../entities/question-types/multiple';
import { RelationForm } from '../../entities/question-types/relation';

interface QuestionFormRendererProps {
	questionType: string;
	questionId: number | null;
}

export const QuestionFormRenderer = ({ questionType, questionId }: QuestionFormRendererProps) => {
	switch (questionType) {
	case 'single':
		return <SingleChooseForm questionId={questionId} />;
	case 'multiple':
		return <MultipleChooseForm questionId={questionId} />;
	case 'matching':
		return <RelationForm questionId={questionId} />;
	default:
		return null;
	}
};
