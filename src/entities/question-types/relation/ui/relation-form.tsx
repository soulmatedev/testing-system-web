import css from './relation-form.module.scss';
import { RelationInput } from './input-response';

interface RelationFormProps {
	questionId: number | null;
}

export const RelationForm = ({ questionId }: RelationFormProps) => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<RelationInput />
		</div>
	);
};
