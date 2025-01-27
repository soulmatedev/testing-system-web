import { SingleChooseForm } from '../../entities/question-form/ui/single-choose-form';
import { MultipleChooseForm } from '../../entities/question-form/ui/multiple-choose-form';
import { RelationForm } from '../../entities/question-form/ui/relation-form';

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
