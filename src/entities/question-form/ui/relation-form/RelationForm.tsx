import css from './RelationForm.module.scss';
import { RelationInputResponse } from './input-response/RelationInputResponse';

interface RelationFormProps {
	questionId: number | null;
}

export const RelationForm = ({ questionId }: RelationFormProps) => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<RelationInputResponse />
		</div>
	);
};
