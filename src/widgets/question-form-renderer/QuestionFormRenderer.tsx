import { SingleChooseForm } from '../question-form/single-choose-form/SingleChooseForm';
import { MultipleChooseForm } from '../question-form/multiple-choice-form/MultipleChooseForm';
import { RelationForm } from '../question-form/relation-form/RelationForm';

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
