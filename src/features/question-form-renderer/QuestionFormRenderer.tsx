import { SingleChooseForm } from '../../entities/question-form/ui/single-choose-form';
import { MultipleChooseForm } from '../../entities/question-form/ui/multiple-choose-form';
import { RelationForm } from '../../entities/question-form/ui/relation-form';

interface QuestionFormRendererProps {
	questionType: string;
}

export const QuestionFormRenderer = ({ questionType }: QuestionFormRendererProps) => {
	switch (questionType) {
	case 'singleChoice':
		return <SingleChooseForm />;
	case 'multipleChoice':
		return <MultipleChooseForm />;
	case 'relation':
		return <RelationForm />;
	default:
		return null;
	}
};
